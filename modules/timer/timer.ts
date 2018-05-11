import { Config } from "../../interfaces/config.type";
import { room } from "../room/room";
import { findUserInMap } from "../findUserInMap/findUserInMap";
import { Room } from "../../interfaces/room.interface";
import { userCanDraw } from "../userCanDraw/userCanDraw";

const config:Config = require("../config/config.json")

/**
 * 后端计时器
 */
export class Timer{
    
    constructor(
        private users:SocketIO.Socket[],
        private roomID:number){

    }
    
    private intervalID:NodeJS.Timer | undefined

    private currentTime = config.MAX_TIME
    
    //开始下一轮
    private nextGame(){
        //通知所有用户本轮结束
        for(let u of this.users){
            u.emit("validAnswerResult",{
                tag:"currentOver"
            })
        }

        //进入下一轮
        setTimeout(() => {
            let r = room.findRoom(this.roomID)
            if(r){
                userCanDraw(r)
                r.rightCount = []
            }
                    
        },config.NEXT_GAME_TIME * 1000)
    }

    //开始计时
    start(){
        this.currentTime = config.MAX_TIME
        if(this.intervalID) clearInterval(this.intervalID)
        this.intervalID = setInterval(() => {
            this.currentTime -= 1
            if(this.currentTime == 0){
                this.nextGame()
            }
        },1000)
    }

    reset(){
        if(this.intervalID) clearInterval(this.intervalID)
        this.nextGame()
    }
}