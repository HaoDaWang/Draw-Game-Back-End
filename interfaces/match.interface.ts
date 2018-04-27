/**
 * 匹配队列接口
 */

export interface MatchQueue extends Array<SocketIO.Socket>{
    [index:number]:SocketIO.Socket
}