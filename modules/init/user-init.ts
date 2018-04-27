import { update } from "../mongoose/CURD/update";
import { usersModel } from "../mongoose/model/usersModel";

/**
 * 初始化更新用户的在线状态
 */
export let initFunc = async function(){
    await update(usersModel, {}, {$set:{isLine:false}})
}