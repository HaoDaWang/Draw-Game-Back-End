/**
 * Module dependencies.
 */

import * as app from '../app'
import * as debugSrc from 'debug'
import { IDebugger } from 'debug';
import * as http from 'http';
import * as socket from 'socket.io';
import { Room } from '../interfaces/room.interface';
import { Match } from '../modules/match/match';
import { userMap } from '../modules/userMap/userMap';
import { MatchQueue } from '../interfaces/match.interface';
import { ChangeCanvas } from '../interfaces/change-canvas.interface';
import { ValidAnswer } from '../interfaces/valid-answer.interface';
import { Socket } from 'dgram';
import { GameQuestion } from '../modules/gameQuestion/game-question';
import { usersModel } from '../modules/mongoose/model/usersModel';
import { update } from '../modules/mongoose/CURD/update';
import { initFunc } from '../modules/init/user-init';

let gameQuestion:GameQuestion = new GameQuestion();

//储存用户socket map对象
let map:Map<string,SocketIO.Socket> = userMap.getUserMap();
// let map:Map<string,SocketIO.Socket> = new Map<string,SocketIO.Socket>();
let debug:IDebugger = debugSrc('drawgameback:server');

/**
 * Get port from environment and store in Express.
 */

var port = normalizePort(process.env.PORT || '3000');
app.set('port', port);

/**
 * Create HTTP server.
 */

var server:http.Server = http.createServer(app);
let socketServer:SocketIO.Server = socket.listen(server);

/**
 * Listen on provided port, on all network interfaces.
 */

server.listen(port,() => {
  console.log("server is running");
});
server.on('error', onError);
server.on('listening', onListening);

//匹配队列
let match:Match = new Match();
//房间容器
let rooms:Array<Room> = [];
//房间号
let roomID:number = 0;

//根据roomID查找room对象
function findRoom(roomID:number):Room | null{
  let result:Room | null = null;
  for(let room of rooms){
    if(room.roomID == roomID){
      result = room;
    }
  }
  if(!result) throw new Error("找不到指定Room");
  return result;
}

//通知用户可以绘画
function userCanDraw(room:Room){
  room.currentUser++;
  if(room.currentUser <= room.users.length - 1){
    for(let s of room.users){
      if(s == room.users[room.currentUser]){
        //通知绘图用户题目
        s.emit("getQuestion",room.gameQuestion.getQuestion());
        s.emit("canDraw",true);
      }
      else {
        s.emit("canDraw",false);
      }
    }
  }
  else{
    //游戏结束 通知所有用户游戏已经结束
    for(let s of room.users){
      s.emit("gameOver");
    }
  }
}

/**
 * @param user 用户名称
 * @param isLine 是否在线标识
 * @param socket 用户的socket对象
 * @description 用于改变用户的在线状态方法
 */
function changeLine(user:string, isLine:boolean, socket:SocketIO.Socket){
  //更新isLine字段
  update(usersModel,{user:user},{$set:{isLine:isLine}})
  .then(() => {
    console.log('更新用户状态为 : ' + user);
    //储存用户socket对象
    if(isLine){
      map.set(user,socket);
    }
    //断开连接 删除用户socket
    else{
      map.delete(user);
    }
  });
}

//监听用户连接
socketServer.on("connection",socket => {
  console.log("有一用户连接");

  //通知客户端连接成功
  socket.emit("connection");

  //更改在线信息
  socket.on('changeLine',msg => {
    changeLine(msg.user, msg.isLine, socket);
  })

  //监听用户断开连接
  socket.on("disconnect",() => {
    console.log("有一用户断开连接");
    //更改在线状态
    map.forEach((value, key, arr) => {
      if(value == socket){
        changeLine(key,false,socket);
      }
    });
  });

  //监听匹配事件
  socket.on("match",data => {
    console.log('match 被触发');
    let socketArr:Array<SocketIO.Socket>= [];
    //装入socket对象
    for(let s of data.users){
      socketArr.push(map.get(s) as SocketIO.Socket);
    }
    
    //添加对象进队列
    if(match.add(socketArr)){
      //加入房间
      let queue:MatchQueue = match.getQueue();
      //新建房间
      rooms.push({
        roomID:++roomID, //房间号
        users:queue, //用户数组
        currentUser:-1, //当前绘图用户
        requestCount:0, //请求次数
        rightCount:[], //答对用户的数组
        gameQuestion:gameQuestion //该房间的游戏问题对象
      });
      //通知客户端匹配成功
      for(let s of queue){
        s.emit("matchSuccessful",roomID);          
      }
      //重置队列
      match.resetQueue();
    }
  });

  //通知房间内用户更新canvas
  socket.on("changeCanvas",(data:ChangeCanvas) => {
    console.log(rooms);
    let room:Room = findRoom(data.roomID) as Room;
    let users:MatchQueue = room.users;
    for(let s of users){
      if(s != socket){
        s.emit('changeCanvasSuccessful',data.dataURL);
        console.log("更新Canvas成功");
      }
    }
  })

  //验证答案是否正确
  socket.on("validAnswer",(data:ValidAnswer) => {
    //获取用户组
    let room:Room = findRoom(data.roomID) as Room;
    if(room.rightCount.indexOf(socket) != -1) {socket.emit("validAnswerResult","repeat-answer");return;};
    
    let users = room.users;
    //结果
    let result = false;
    let allRight = false;
    //答对答案
    if(data.answer == room.gameQuestion.getCurrentQuestion()){
      result = true;
    }
    //答对答案
    if(result){
      room.rightCount.push(socket);
      //全部答对
      if(room.rightCount.length == room.users.length - 1){
        //移至下一用户画图
        userCanDraw(room);
        //重置人数
        room.rightCount = [];
        //通知所有用户开始下一轮
        allRight = true;
      }
    }
    //通知其他用户自己已答对答案
    for(let s of users){
      if(s != socket && result){
        s.emit("validAnswerResult","right")
      }
      else if(s == socket && result){
        s.emit("validAnswerResult","right-mySelf");
      }
      else if(s == socket && !result){
        s.emit("validAnswerResult","error");
      }
      if(allRight){
        s.emit("validAnswerResult","all-right");
      }
    }
  });

  //开始游戏
  socket.on("beginGame",(data:BeginGame) => {
    //防止重复执行
    let room:Room = findRoom(data.roomID) as Room;
    room.requestCount++;
    if(room.requestCount == room.users.length){
      //通知用户可以绘画
      userCanDraw(findRoom(data.roomID) as Room);
      console.log("通知用户可以绘画");
      room.requestCount = 0;
    }
  })

  //发送请求给指定用户
  socket.on("sendRequestToFriend",data => {
    console.log(data);
    let user:SocketIO.Socket = map.get(data.targetUser) as SocketIO.Socket;
    if(user){
      user.emit("getRequest",{user:data.user,first:data.first});
    }
    else {
      console.log("找不到指定用户");
    }
  });

  //监听客户端发送的消息
  socket.on("message",msg => {  
    console.log(`获取到的消息 ${JSON.stringify(msg)}`);
    let user:SocketIO.Socket = map.get(msg.targetUser) as SocketIO.Socket;
    //转发消息
    if(user){
      user.send({userName:msg.userName,msg:msg.msg});
    }
  });
});

socketServer.on("error",(err:any) => {
  console.log(`有一个错误发生， 错误对象为 ${JSON.stringify(err)}`);
});

//捕获未处理异常
process.on("uncaughtException", err => console.log(err.stack))

/**
 * Normalize a port into a number, string, or false.
 */

function normalizePort(val:any) {
  var port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}

/**
 * Event listener for HTTP server "error" event.
 */

function onError(error:any) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  var bind = typeof port === 'string'
    ? 'Pipe ' + port
    : 'Port ' + port;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use');
      process.exit(1);
      break;
    default:
      throw error;
  }
}

/**
 * Event listener for HTTP server "listening" event.
 */

function onListening() {
  var addr = server.address();
  var bind = typeof addr === 'string'
    ? 'pipe ' + addr
    : 'port ' + addr.port;
  debug('Listening on ' + bind);
}


//初始化
initFunc()