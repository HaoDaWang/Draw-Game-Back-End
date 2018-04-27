import { update } from "../mongoose/CURD/update";
import { usersModel } from "../mongoose/model/usersModel";

/**
 * 添加好友模块
 * @param targetUser 需要添加的好友
 * @param user 发送请求的用户
 */
export let addFriend = async function(user:string, targetUser:string){
    //查询JSON
    let queryJSON = {
        "user":user
    };
    //更新JSON
    let updateJSON = {
        $push:{
            friends:{"user":targetUser}
        }
    };
    let result = await update(usersModel,queryJSON,updateJSON);
}