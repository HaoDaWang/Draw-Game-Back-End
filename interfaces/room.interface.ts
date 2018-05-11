import { MatchQueue } from "./match.interface";
import { GameQuestion } from "../modules/gameQuestion/game-question";
import { Timer } from "../modules/timer/timer";
import { readyQueue } from "../modules/readyQueue/readyQueue";
import { Organize2User } from "./organize2-user.interface";

/**
 * 游戏房间接口
 */
export interface Room{
    roomID:number, //房间号
    users:Organize2User[], //用户数组
    currentUser:number, //当前绘图用户
    requestCount:number, //请求次数
    rightCount:Array<SocketIO.Socket> //答对用户的数组
    gameQuestion:GameQuestion,    //游戏抽题器
    currentQuestion:string,    //当前答案  
    timer:Timer,   //计时器对象
    readyQueue:ReadyQueueBody[], //准备队列
    readyIndex:number
}