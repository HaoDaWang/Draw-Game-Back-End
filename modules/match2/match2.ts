import { organize2Pool } from "../organize2/organize2pool";
import { Config } from "../../interfaces/config.type";
import { Organize2User } from "../../interfaces/organize2-user.interface";
import { personPool } from "../person/personPool";
import { userMap } from "../userMap/userMap";
import { room } from "../room/room";
import { GameQuestion } from "../gameQuestion/game-question";
import { Timer } from "../timer/timer";
import { createRoom } from "./createRoom";
const config: Config = require("../config/config")

/**
 * 第二个版本的匹配对象
 */
class Match2 {

    //检查是否匹配成功
    judge() {
        //匹配成功的临时数组
        let tmpArr: Array<Organize2User> = []
        //用于复原的personpool数组
        let tmpPersonPoolArr:Array<Organize2User> = []
        for (let organize of organize2Pool.getOrganizeArr()) {
            tmpArr = organize.getOrganize()
            if(!organize.isMatch) continue
            while (personPool.getPersonArr().length > 0) {
                if (tmpArr.length == config.MATCH_COUNT) break
                tmpPersonPoolArr = personPool.getPersonArr().slice(0)
                tmpArr.push(personPool.getPersonArr().pop() as Organize2User)
            }
            //匹配成功
            if (tmpArr.length == config.MATCH_COUNT) {

                //创建房间
                createRoom(tmpArr)
                tmpArr = []
                continue
            }
            //不够人数
            //复原personPool数组
            personPool.setPersonArr(tmpPersonPoolArr)
            break
        }

        this.alone(personPool.getPersonArr())
    }
    
    //个人凑齐人数匹配游戏
    private alone(arr:Organize2User[]){
        let tmpArr:Organize2User[] = []
        console.log(`当前单人队列中有 ${arr.length}`)
        if(arr.length < config.MATCH_COUNT) return
        while(arr.length > 0){
            if(tmpArr.length == config.MATCH_COUNT) break
            tmpArr.push(arr.pop() as Organize2User)
        }

        createRoom(tmpArr)
        this.alone(personPool.getPersonArr())
    }
}

export let match2 = new Match2()