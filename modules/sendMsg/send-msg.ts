import { userMap } from "../userMap/userMap";

/**
 * 功能：向指定用户发送消息
 * @param targetUsername 发送目标用户
 * @param username 发送源用户
 * @param body 发送的消息主体
 * @param tag 标志位，告知客户端如何处理消息
 * @return 是否执行成功
 */

export let sendMsg = function(targetUsername:string,username:string, body:string, tag:string):boolean{
    let map = userMap.getUserMap()
    let user = map.get(targetUsername)
    if(!user) return false
    
    //发送消息 {msg:any, tag:string}
    user.emit("userMsg",{
        msg:{
            username:username,
            body:body
        },
        tag:tag
    })
    return true
}