import { userMap } from "../userMap/userMap";
import { Organize } from "../../interfaces/organizes.interface";

class OrganizeManager{
    map:Map<string,SocketIO.Socket> = userMap.getUserMap();
    organizes:Array<Organize> = [];

    //获取队伍信息
    getOrganizes(first:string):Organize | null{
        for(let val of this.organizes){
            if(val.first == first){
                return val;
            }
        }
        return null;
    }

    //通知该队伍所有用户更新
    updateInfo(first:string,isDrop:boolean = false){
        let thisOrganize:Organize = this.getOrganizes(first) as Organize;
        for(let user of thisOrganize.users){
            (this.map.get(user) as SocketIO.Socket).emit("updateInfo",{isDrop:isDrop,organize:this.getOrganizes(first)});
        }
        (this.map.get(first) as SocketIO.Socket).emit("updateInfo",{isDrop:isDrop,organize:this.getOrganizes(first)});
    }

    //添加成员
    addUser(first:string ,userName:string){
        //是否有队员名
        //没有队员名创建房间
        if(!userName){ 
            this.organizes.push({first:first,users:[]});
        }
        else {
            let result:boolean = false;
            //添加成员
            for(let obj of this.organizes){
                if(obj.first == first){
                    obj.users.push(userName);
                    result = true;
                }
            }
        }
       
        this.updateInfo(first);
    }

    //删除成员
    removeUser(first:string, userName:string){
        let organize:Organize | undefined;
        for(let val of this.organizes){
            if(val.first == first){
                organize = val;
            }
        }
        
        if(organize){
            for(let val of organize.users){
                if(val == userName){
                    organize.users.splice(organize.users.indexOf(val),1);
                }
            }
        }

        this.updateInfo(first);
    }

    //销毁队伍
    dropOrganizes(first:string){
        this.updateInfo(first,true);
        for(let val of this.organizes){
            if(val.first == first){
                this.organizes.splice(this.organizes.indexOf(val),1);
            }
        }
    }
}

export let organizeManager:OrganizeManager = new OrganizeManager();