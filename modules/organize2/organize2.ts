import { Organize2User } from "../../interfaces/organize2-user.interface";

/**
 * 组队匹配的第二版
 */

export class Organize2{
    //实际维护用户组队的容器
    userArr:Organize2User[] = []

    //增加用户
    addUser(user:Organize2User){
        this.userArr.push(user)
    }
    //删除用户
    removeUser(user:Organize2User){
        let index = this.userArr.indexOf(user)
        this.userArr.splice(index,1)
    }
    //获取队伍
    getOrganize(){
        return this.userArr
    }
}