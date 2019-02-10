import { Organize2User } from "../../interfaces/organize2-user.interface";
import { room } from "../room/room";
import { userMap } from "../userMap/userMap";
import { GameQuestion } from "../gameQuestion/game-question";
import { Timer } from "../timer/timer";

/**
 * 功能：创建房间
 * @param tmpArr 在房间里的人的数组
 */

export let createRoom = function (tmpArr:Organize2User[]) {
    let roomID = room.getRoomID()
    let socketQueue: SocketIO.Socket[] = []
    for (let v of tmpArr) {
        socketQueue.push(userMap.getUserMap().get(v.user) as SocketIO.Socket)
    }
    console.log("-----------------tmpArr" + tmpArr.length )
    let arr: ReadyQueueBody[] = []
    //封装准备队列的对象ß
    for (let obj of tmpArr) {
        arr.push({
            user: obj.user,
            headImg: obj.headImg,
            isReady: false,
            isRight: false
        })
    }

    //创建房间
    room.getRooms().push({
        roomID: roomID,
        users: tmpArr,
        currentUser: -1,
        requestCount: 0,
        rightCount: [],
        gameQuestion: new GameQuestion(),
        currentQuestion: "",
        timer: new Timer(socketQueue, roomID),
        readyQueue: arr,
        readyIndex: 0
    })

    //广播给所有用户通知他们进入准备队列
    for (let u of tmpArr) {
        let s = userMap.getUserMap().get(u.user)
        if (s) s.emit("userMsg", {
            msg: {
                username: "",
                body: {
                    queue: arr,
                    roomID: roomID
                }
            },
            tag: "readyQueue"
        })
    }
}