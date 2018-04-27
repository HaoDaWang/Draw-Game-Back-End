import { MatchQueue } from "../../interfaces/match.interface";
import { Socket } from "dgram";

/**
 * 维护一个队列用于匹配算法
 */

//匹配最大人数
const MATCH_COUNT = 3;
//参与匹配的用户人数
let userCount = 1;

export class Match{
    //匹配队列
    queue:MatchQueue = [];

    //用户进入匹配队列
    add(users:Array<SocketIO.Socket>):boolean{
        console.log(`添加进队列`);
        //更新参与匹配的用户人数
        userCount = users.length;

        //检查是否有剩余的空位能够容纳这次匹配的用户
        if((MATCH_COUNT - this.queue.length) >= userCount){
            for(let user of users){
                this.queue.push(user);
            }
        }

        //判断是否达到匹配人数
        if(this.queue.length == MATCH_COUNT){
            return true;
        }

        console.log(`当前队列长度 ${this.queue.length}`);
        return false;
    }

    //获取当前队列
    getQueue():MatchQueue{
        return this.queue;
    }

    //重置队列
    resetQueue(){
        //移除引用等待GC回收
        this.queue = [];
    }
}