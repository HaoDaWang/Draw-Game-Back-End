import { userMap } from "../userMap/userMap";
import { Organize2User } from "../../interfaces/organize2-user.interface";
import { findUser } from "../mongoose/CURD/find";
import { usersModel } from "../mongoose/model/usersModel";
import { Organize2 } from "../organize2/organize2";
import { match2 } from "../match2/match2";

/**
 * 用户容器，储存用户对象
 */
class PersonPool{
    PersonArr:Organize2User[] = []

    //添加进用户容器
    async addUser(user:string){
        let s = userMap.getUserMap().get(user)
        if(!s) throw new Error("添加进用户容器：未找到该用户") 
        let result = await findUser(usersModel,{user:user},{_id:0,headImg:1})
        this.PersonArr.push({
            user:user,
            headImg:result.successful[0].headImg
        })
        match2.judge()
    }

    //从用户池中删除用户
    removeUser(user:string){
        for(let i = 0;i < this.PersonArr.length;i++){
            if(this.PersonArr[i].user == user) this.PersonArr.splice(i,1)
        }
    }
    
    getPersonArr(){
        return this.PersonArr
    }

    setPersonArr(arr:Organize2User[]){
        this.PersonArr = arr
    }
}

//单例
export let personPool = new PersonPool()