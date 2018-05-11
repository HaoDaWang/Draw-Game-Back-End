import { Room } from "../../interfaces/room.interface";
import { findUserInMap } from "../findUserInMap/findUserInMap";
import { userMap } from "../userMap/userMap";

/**
 * 功能：通知用户可以作画
 * @param room 房间对象
 */
export let userCanDraw = function (room: Room) {
    room.currentUser++;
    if (room.currentUser <= room.users.length - 1) {
        for (let obj of room.users) {
            let s = userMap.getUserMap().get(obj.user) as SocketIO.Socket
            if(!s) throw new Error("创建房间:没有找到指定用户")
            if (obj == room.users[room.currentUser]) {
                //通知绘图用户题目
                room.gameQuestion.getQuestion()
                    .then((question: string) => {
                        s.emit("getQuestion", question);
                        s.emit("canDraw", true);
                        room.currentQuestion = room.gameQuestion.getCurrentQuestion()
                    })
            }
            else {
                s.emit("canDraw", false);
            }
            //通知所有客户端更新画图者 给头像加边框 顺带通知客户端开始计时
            s.emit("validAnswerResult", {
                user: findUserInMap(userMap.getUserMap().get(room.users[room.currentUser].user) as SocketIO.Socket),
                tag: "updateDrawer"
            })
        }

        //开始计时
        room.timer.start()
    }
    else {
        //游戏结束 通知所有用户游戏已经结束
        for (let obj of room.users) {
            let s = userMap.getUserMap().get(obj.user) as SocketIO.Socket
            if(!s) throw new Error("创建房间:没有找到指定用户")
            s.emit("gameOver");
        }
    }
}