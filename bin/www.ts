import * as app from '../app'
import * as debugSrc from 'debug'
import { IDebugger } from 'debug';
import * as http from 'http';
import * as socket from 'socket.io';
import { Room } from '../interfaces/room.interface';
import { userMap } from '../modules/userMap/userMap';
import { MatchQueue } from '../interfaces/match.interface';
import { ChangeCanvas } from '../interfaces/change-canvas.interface';
import { ValidAnswer } from '../interfaces/valid-answer.interface';
import { Socket } from 'dgram';
import { usersModel } from '../modules/mongoose/model/usersModel';
import { update } from '../modules/mongoose/CURD/update';
import { initFunc } from '../modules/init/user-init';
import { sendMsg } from '../modules/sendMsg/send-msg';
import { findUserInMap } from '../modules/findUserInMap/findUserInMap';
import { findUser } from '../modules/mongoose/CURD/find';
import { readyQueue } from '../modules/readyQueue/readyQueue';
import { room } from '../modules/room/room';
import { Timer } from '../modules/timer/timer';
import { userCanDraw } from '../modules/userCanDraw/userCanDraw';
import { personPool } from '../modules/person/personPool';
import { Organize2 } from '../modules/organize2/organize2';
import { Organize2User } from '../interfaces/organize2-user.interface';

//储存用户socket map对象
let map: Map<string, SocketIO.Socket> = userMap.getUserMap();
// let map:Map<string,SocketIO.Socket> = new Map<string,SocketIO.Socket>();
let debug: IDebugger = debugSrc('drawgameback:server');

/**
 * Get port from environment and store in Express.
 */

var port = normalizePort(process.env.PORT || '3000');
app.set('port', port);

/**
 * Create HTTP server.
 */

var server: http.Server = http.createServer(app);
let socketServer: SocketIO.Server = socket.listen(server);

/**
 * Listen on provided port, on all network interfaces.
 */

server.listen(port, () => {
    console.log("server is running");
});
server.on('error', onError);
server.on('listening', onListening);

//房间容器
let rooms: Array<Room> = room.getRooms()

/**
 * @param user 用户名称
 * @param isLine 是否在线标识
 * @param socket 用户的socket对象
 * @description 用于改变用户的在线状态方法
 */
function changeLine(user: string, isLine: boolean, socket: SocketIO.Socket) {
    //更新isLine字段
    update(usersModel, { user: user }, { $set: { isLine: isLine } })
        .then(() => {
            console.log('更新用户状态为 : ' + user);
            //储存用户socket对象
            if (isLine) {
                map.set(user, socket);
            }
            //断开连接 删除用户socket
            else {
                map.delete(user);
            }
        });
}

//监听用户连接
socketServer.on("connection", socket => {
    console.log("有一用户连接");

    //通知客户端连接成功
    socket.emit("connection");

    //更改在线信息
    socket.on('changeLine', msg => {
        changeLine(msg.user, msg.isLine, socket);
    })

    //监听用户断开连接
    socket.on("disconnect", () => {
        console.log("有一用户断开连接");
        //更改在线状态
        map.forEach((value, key, arr) => {
            if (value == socket) {
                changeLine(key, false, socket);
            }
        });
    });

    //监听匹配事件
    //   socket.on("match",async (data) => {
    //     console.log('match 被触发');
    //     let socketArr:Array<SocketIO.Socket>= [];
    //     //装入socket对象
    //     for(let s of data.users){
    //         socketArr.push(map.get(s) as SocketIO.Socket);
    //     }

    //     //匹配成功进入准备队列
    //     if(match.add(socketArr)){
    //         //要传输的对象
    //         let arr:ReadyQueueBody[] = []
    //         //通知客户端进入准备队列
    //         for(let socket of match.getQueue()){
    //             let user = findUserInMap(socket)
    //             console.log("------" + user)
    //             let result = await findUser(usersModel, {user:user}, {user:1,headImg:1,_id:-1})
    //             if(result.err) throw new Error("未找到此用户")
    //             arr.push({
    //                 headImg:result.successful[0].headImg,
    //                 user:result.successful[0].user,
    //                 isReady:false,
    //                 isRight:false
    //             })
    //         }

    //         readyQueue.setQueue(arr)

    //         //广播给所有用户
    //         for(let socket of match.getQueue()){
    //             readyQueue.pushSocket(socket)
    //             socket.emit("userMsg",{
    //                 msg:{
    //                     username:"",
    //                     body:arr
    //                 },
    //                 tag:"readyQueue"
    //             })
    //         }
    //     }
    //   });

    //match2
    socket.on("match",data => {
        //加入用户容器
        personPool.addUser(data.user)
    })

    //通知房间内用户更新canvas
    socket.on("changeCanvas", (data: ChangeCanvas) => {
        let r: Room = room.findRoom(data.roomID) as Room;
        let users: Organize2User[] = r.users;
        console.log(users.length)
        for (let obj of users) {
            let s = userMap.getUserMap().get(obj.user)
            if(!s) throw new Error("房间内更新canvas:没有找到指定用户")
            if (s != socket) {
                s.emit('changeCanvasSuccessful', data.dataURL);
                console.log("更新Canvas成功");
            }
        }
    })

    //验证答案是否正确
    socket.on("validAnswer", (data: ValidAnswer) => {
        //获取用户组
        let r: Room = room.findRoom(data.roomID) as Room;
        if (r.rightCount.indexOf(socket) != -1) {
            socket.emit("validAnswerResult", {
                tag: "repeat-answer"
            });
            return;
        }

        let users = r.users;
        //结果
        let result = false;
        let allRight = false;
        //答对答案
        if (data.answer == r.gameQuestion.getCurrentQuestion()) {
            result = true;
        }
        //答对答案
        if (result) {
            r.rightCount.push(socket);
            //全部答对
            if (r.rightCount.length == r.users.length - 1) {
                //移至下一用户画图
                // userCanDraw(r);
                r.timer.reset()
                //重置人数
                r.rightCount = [];
                //通知所有用户开始下一轮
                allRight = true;
            }
        }
        console.log(users)
        //通知其他用户自己已答对答案
        for (let obj of users) {
            let s = userMap.getUserMap().get(obj.user)
            if(!s) throw new Error("验证答案:没有找到指定用户")
            //回答正确
            if (result) {
                s.emit("validAnswerResult", {
                    user: findUserInMap(socket),
                    body: data.answer,
                    isRight: true,
                    tag: "rightAndError"
                })
            }
            //   else if(s == socket && result){
            //     s.emit("validAnswerResult","right-mySelf");
            //   }
            //回答错误
            else if (!result) {
                s.emit("validAnswerResult", {
                    user: findUserInMap(socket),
                    body: data.answer,
                    isRight: false,
                    tag: "rightAndError"
                });
            }
            //全部正确
            if (allRight) {
                //停止计时
                s.emit("validAnswerResult", {
                    tag: "all-right"
                });
            }
        }
    });

    //开始游戏
    socket.on("beginGame", (data: BeginGame) => {
        //防止重复执行
        let r: Room = room.findRoom(data.roomID) as Room;
        r.requestCount++;
        if (r.requestCount == r.users.length) {
            //通知用户可以绘画
            userCanDraw(room.findRoom(data.roomID) as Room);
            console.log("通知用户可以绘画");
            r.requestCount = 0;
        }
    })

    //发送请求给指定用户
    socket.on("sendRequestToFriend", data => {
        console.log(data);
        let user: SocketIO.Socket = map.get(data.targetUser) as SocketIO.Socket;
        if (user) {
            user.emit("getRequest", { user: data.user, first: data.first });
        }
        else {
            console.log("找不到指定用户");
        }
    });

    //监听客户端发送的消息
    socket.on("message", msg => {
        console.log(`获取到的消息 ${JSON.stringify(msg)}`);
        let user: SocketIO.Socket = map.get(msg.targetUser) as SocketIO.Socket;
        //转发消息
        if (user) {
            user.send({ userName: msg.userName, msg: msg.msg });
        }
    });
});

socketServer.on("error", (err: any) => {
    console.log(`有一个错误发生， 错误对象为 ${JSON.stringify(err)}`);
});

//捕获未处理异常
process.on("uncaughtException", (err: any) => console.log(err.stack))

//捕获未处理的Promise异常
process.on("unhandledRejection", (err: any) => console.log(err.stack))

/**
 * Normalize a port into a number, string, or false.
 */

function normalizePort(val: any) {
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

function onError(error: any) {
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
