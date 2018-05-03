import { sendMsg } from "../sendMsg/send-msg";

/**
 * 功能：广播给其它用户消息模块
 * @param isIncludeMe 是否广播包括自己
 * @param sockets 需要广播的范围（一些sockets对象）
 * @param eventName 广播的事件名称
 * @param mySocket 自己的so
 * @param body 需要发送的消息主体
 */
export let Boardcast = function(
    sockets:SocketIO.Socket[], 
    eventName:string,
    isIncludeMe:boolean, 
    mySocket:SocketIO.Socket,
    body:any
){
    for(let s of sockets){
        //过滤掉自己
        if(!isIncludeMe && s == mySocket) continue
        s.emit("userMsg",{
            msg:{
                username:"",
                body:body
            },
            tag:eventName
        })
    }
}