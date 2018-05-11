// import { MatchQueue } from "../../interfaces/match.interface";
// import { Socket } from "dgram";
// import { Config } from "../../interfaces/config.type";
// import { userMap } from "../userMap/userMap";
// import { room } from "../room/room";
// import { Room } from "../../interfaces/room.interface";
// import { readyQueue } from "../readyQueue/readyQueue";
// import { Timer } from "../timer/timer";
// import { GameQuestion } from "../gameQuestion/game-question";
// const config:Config = require("../config/config.json");

// /**
//  * 维护一个队列用于匹配算法
//  */

// //参与匹配的用户人数
// let userCount = 1;

// class Match{
//     //匹配队列
//     queue:MatchQueue = [];
    
//     //准备索引
//     readyIndex:number = 0

//     //用户进入匹配队列
//     add(users:Array<SocketIO.Socket>):boolean{
//         console.log(`添加进队列`);
//         //更新参与匹配的用户人数
//         userCount = users.length;

//         //检查是否有剩余的空位能够容纳这次匹配的用户
//         // if((MATCH_COUNT - this.queue.length) >= userCount){
            
//         // }
//         for(let user of users){
//             this.queue.push(user);
//         }

//         //判断是否达到匹配人数
//         if(this.queue.length >= config.MATCH_COUNT){
//             return true;
//         }
        
//         console.log(`当前队列长度 ${this.queue.length}`);
//         return false;
//     }

//     //获取当前队列
//     getQueue():MatchQueue{
//         return this.queue;
//     }

//     //重置队列
//     resetQueue(){
//         //移除引用等待GC回收
//         this.queue = [];
//     }

//     //将用户从匹配队列中删除
//     removeUser(username:string){
//         let map = userMap.getUserMap()
//         this.queue.splice(this.queue.indexOf(map.get(username) as SocketIO.Socket,1))
//         console.log(`用户 ${username} 从匹配队列中剔除`)
//     }

//     //用户准备
//     userReady(){
//         this.readyIndex++
//         //开始游戏
//         if(this.readyIndex == config.MATCH_COUNT){
//             console.log("开始游戏！！！！！！！")
//             let rooms:Array<Room> = room.getRooms()
//             let roomID:number = room.roomID
//             //加入房间
//             let queue:MatchQueue = match.getQueue();
//             //新建房间
//             // rooms.push({
//             //     roomID:++roomID, //房间号
//             //     users:queue, //用户数组
//             //     currentUser:-1, //当前绘图用户
//             //     requestCount:0, //请求次数
//             //     rightCount:[], //答对用户的数组
//             //     gameQuestion:new GameQuestion(),  //该房间的游戏问题对象
//             //     currentQuestion:"",
//             //     timer:new Timer(queue, roomID)
//             // });
            
//             //通知客户端匹配成功
//             for(let s of queue){
//                 s.emit("matchSuccessful",roomID);          
//             }
//             //重置队列
//             this.resetQueue();
//             //重置
//             this.readyIndex = 0
//             readyQueue.reset()
//         }
//     }
// }

// //单例
// export let match = new Match()