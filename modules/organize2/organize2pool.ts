import { Organize2 } from "./organize2";
import { Organize2User } from "../../interfaces/organize2-user.interface";

/**
 * 队伍池, 储存各种队伍对象
 */

class Organize2Pool{
    organize2Map:Map<string, Organize2> = new Map<string, Organize2>()
    
    //添加进队伍池
    addOrganize(organize2:Organize2){
        this.organize2Map.set(organize2.getOrganize()[0].user,organize2)
    }

    //从队伍池中删除队伍 根据队伍对象
    removeOrganizeAsOrganize(organize2:Organize2){
        this.organize2Map.delete(organize2.getOrganize()[0].user)
    }

    //从队伍池中删除队伍 根据用户对象
    removeOrganizeAsUser(user:string){
        this.organize2Map.delete(user)
    }

    //从线程池中寻找队伍
    getOrganize(user:string){
        return this.organize2Map.get(user)
    }
}

//单例
export let organize2Pool = new Organize2Pool()