import { MatchQueue } from "./match.interface";
import { GameQuestion } from "../modules/gameQuestion/game-question";

/**
 * 游戏房间接口
 */
export interface Room{
    roomID:number, //房间号
    users:MatchQueue, //用户数组
    currentUser:number, //当前绘图用户
    requestCount:number, //请求次数
    rightCount:Array<SocketIO.Socket> //答对用户的数组
    gameQuestion:GameQuestion
}