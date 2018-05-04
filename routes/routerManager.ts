import { Router, Express } from 'express-serve-static-core'
import * as path from 'path'
import * as express from 'express';
import { findUser as find } from '../modules/mongoose/CURD/find';
import { usersModel } from '../modules/mongoose/model/usersModel';
import { ReturnData } from '../interfaces/return-data.interface';
import { add } from '../modules/mongoose/CURD/add';
import { update } from '../modules/mongoose/CURD/update';
import { remove } from '../modules/mongoose/CURD/remove';
import { gq } from '../modules/gameQuestion/game-question';
import { organizeManager as organize } from '../modules/organize/organize';
import { sendMsg } from '../modules/sendMsg/send-msg';
import { addFriend } from '../modules/addFriend/addFriend';
import { upload } from '../modules/upload/upload';
import { Config } from '../interfaces/config.type';
import { removeFile } from '../modules/removeFile/removeFile';
import { match } from '../modules/match/match';
import { userMap } from '../modules/userMap/userMap';
import { readyQueue } from '../modules/readyQueue/readyQueue';
import { Organize2 } from '../modules/organize2/organize2';
import { organize2Pool } from '../modules/organize2/organize2pool';
const config:Config = require("../modules/config/config.json")
const gameQuestion = gq
const router:Router = express.Router();

//从队伍中添加或删除成员
function addAndRemove(req:express.Request, tag:string){
    let captain = req.body.captain
    let targetUser = req.body.user
    let organize2 = organize2Pool.getOrganize(captain.user)
    if(organize2){ 
        if (tag == "add") organize2.addUser(targetUser)
        else organize2.removeUser(targetUser)
        organize2Pool.addOrganize(organize2)
    }
    else organize2 = undefined
    return organize2
}

//广播所有队伍中的成员，更新队伍
function organize2Boardcast(organize2:Organize2, isIncludeMyself:boolean, user:string, body:any, tag:string){
    let organizeArr = organize2.getOrganize()
    for(let obj of organizeArr){
        if(!isIncludeMyself && obj.user == user) continue
        sendMsg(obj.user,"",body,tag)
    }
}

//模块目录
const modulePath = path.join("../","modules");

/**
 * 路由捕获
 */

//登录
router.post('/login',(req,res) => {
    let obj = req.body;
    console.log(`登录用户 ： 账号：${obj.user}  密码 ： ${obj.passw}`);
    (async function(){
        let resultSet:any = await find(usersModel,{user:obj.user});
        console.log(`------------------------${JSON.stringify(resultSet)}`);
        let result;
        if(resultSet.err != "empty"){
            result = resultSet.successful[0];
        }
        else{
            res.send({err:"该账号尚未注册"});
            return;
        }
        if(result.length != 0 && result.user == obj.user && result.passw == obj.passw){
            if(result.isLine){
                res.send({err:"该账号正在使用中"});
            }
            else{
                res.send({successful:"账号密码正确"});
            }
        }
        else{
            res.send({err:"账号密码错误"});
        }
    })();
});

//注册
router.post('/registe',(req,res) => {
    console.log(`注册用户 ： 账号：${req.body.user}  密码 ： ${req.body.passw}`);
    (async function(){
        //查询用户是否存在
        let resultSet:any = await find(usersModel,{user:req.body.user});
        let result;
        if(resultSet.err == 'empty'){
            //添加用户信息
            result = await add(usersModel,{
                user:req.body.user,
                passw:req.body.passw
            });
            res.send({successful:result});
        }
        else{
            result = "用户已经存在";
            res.send({err:result});
        }
    })();
});

//查询用户好友列表
router.post('/getUser/:id',(req,res) => {
    console.log(`获取到的参数  ${req.params.id}`);
    (async function(){
        let result = await find(usersModel,{user:req.params.id});
        res.send(result);    
    })();
});

//双方添加好友
//等待对方确认过之后 双方都添加好友
//添加好友
router.post('/addFriendTrue',(req,res) => {
    let user = req.body.user
    let targetUser = req.body.targetUser
    
    addFriend(user, targetUser)    
    addFriend(targetUser, user)
    
    res.send({})
});

//给另外一个用户发送消息
router.post('/sendMsg',(req,res) => {
    console.log("发送消息给指定用户")
    //发送给指定用户请求
    sendMsg(
        req.body.targetUser,    //目标用户
        req.body.user,          //源用户
        req.body.msg,           //发送的消息
        req.body.tag            //告知客户端如何处理该请求
    )
    res.send({})
});

//根据朋友列表ID查询好友全部信息
router.post("/getFriendList",(req,res) => {
    let friendList = req.body.friendList;
    (async function(){
        let user:any,result:Array<any> = [];
        if(!friendList){
            res.send({successful:result});
            return;
        }
        for(let friend of friendList){
            user = await find(usersModel,{user:friend.user});
            result.push({
                user:user.successful[0].user,
                isLine:user.successful[0].isLine,
                headImg:user.successful[0].headImg
            });           
        } 
        res.send({successful:result});
    })();
});

//获取游戏问题
router.get('/getQuestion',(req,res) => {
    res.send({successful:gameQuestion.getQuestion()});
});

// //队伍添加成员
// router.post('/addOrganizeUser',(req,res) => {
//     console.log(req.body.first,req.body.userName);
//     organize.addUser(req.body.first,req.body.userName);
//     console.log(`现在的组队数组形如 ： ${JSON.stringify(organize.organizes)}`);
//     res.send({successful:"添加成功"});
// });

// //队伍删除成员
// router.post('/removeOrganizeUser',(req,res) => {
//     organize.removeUser(req.body.first,req.body.userName);
//     console.log(`现在的组队数组形如 ： ${JSON.stringify(organize.organizes)}`);
//     res.send({successful:"删除成功"});    
// })

// //获取队伍信息
// router.post('/getOrganizeInfo',(req,res) => {
//     res.send({successful:organize.getOrganizes(req.body.first)});
// })

//销毁队伍
// router.post('/dropOrganize',(req,res) => {
//      organize.dropOrganizes(req.body.first);
//      res.send({successful:"销毁成功"});
// });

//设置用户空闲状态
router.post("/setFreeState",(req,res) => {
    (async function(){
        let result = await update(usersModel,{user:req.body.user},{$set:{isFree:req.body.isFree}});
        res.send({successful:result});
    })();
});

//获取指定用户信息
router.post("/getUserInfo",(req, res) => {
    (async function(){
        let result:{successful?:any, err?:any} = await find(usersModel,{user:req.body.user},{_id:0,passw:0});
        if(result.err) {
            console.log(result.err)
            res.send(result)
            return
        }

        //屏蔽密码访问
        // delete result.successful["passw"]     
        res.send(result)
        return
    })()
})

//上传用户头像
router.post("/uploadHeadImg",upload("headImg").single("headImg") as any,(req, res) => {
    console.log(req.file);
    //获取当前用户的头像路径
        (async function(){
            try{
                let result = await find(usersModel,{user:req.body.user},{_id:0, headImg:1})
                let defaultHeadImg = result.successful[0].headImg
                //判断是否为默认头像路径， 如果不是则删除
                if(config.defaultHeadImg.indexOf(defaultHeadImg) == -1){
                    await removeFile(path.resolve("public" + defaultHeadImg))
                } 
                //更新用户头像
                await update(usersModel,{user:req.body.user},{headImg:req.file.path.substring(6,req.file.path.length)})
                res.send({successful:"上传成功"})
            }
            catch(e){
                console.log(e.stack)
                res.send({end:"上传失败"})
            }
        })()
})

//保存用户信息
router.post("/saveUserInfo",(req, res) => {
    let obj = req.body
    let user = req.body.user
    delete obj['user'];
    //更新用户信息
    (async function(){
        try{
            await update(usersModel,{user:user},obj)
            res.send({successful:"保存成功"})
        }
        catch(e){
            console.log(e.stack)
            res.send({err:"保存失败"})
        }
    })()
})

//更新准备队列
router.post("/updateReadyQueue",(req, res) => {
    let user = req.body.user

    //更新准备队列
    let q = readyQueue.getQueue()
    for(let obj of q){
        if(obj.user == user){
            obj.isReady = true
            break
        }
    }
    //广播
    for(let s of readyQueue.getSocketQueue()){
        s.emit("userMsg",{
            msg:{
                username:"",
                body:q
            },
            tag:"readyQueue"
        })
    }

    match.userReady()
    res.end()
})

//将用户从匹配队列中删除
router.post("/removeUserToMatch",(req, res) => {
    match.removeUser(req.body.user)
    res.end()
})


router.post("/createOrganize2",(req, res) => {
    let organize2 = new Organize2()
    organize2.addUser(req.body.captain)
    //添加队伍进队伍池
    organize2Pool.addOrganize(organize2)
    res.send({organize:organize2.getOrganize()})
})

//添加用户进队伍
router.post("/addUserInOrganize2",(req, res) => {
    console.log(`添加用户 ${req.body.user.user} 进入队伍`)
    let organize = addAndRemove(req, "add")
    console.log(organize)
    if(organize){
        organize2Boardcast(organize,true,"",organize.getOrganize(),"updateOrganize")
        res.send({organize:organize.getOrganize()})
    }
    res.send({organize:[]})
})
//从队伍将用户删除
router.post("/removeUserInOrganize2",(req, res) => {
    console.log(`将用户 ${req.body.user.user} 从队伍中删除`)
    let organize = addAndRemove(req, "remove")
    if(organize) {
        organize2Boardcast(organize,true,"",organize.getOrganize(),"updateOrganize")
        res.send({organize:organize.getOrganize()})
    }
    res.send({organize:[]})
})

//销毁队伍
router.post("/dropOrganize",(req, res) => {
    console.log(`队长 ${req.body.user.user} 请求解散队伍`)
    let user = req.body.user.user
    let organize = organize2Pool.getOrganize(user)
    if(organize) organize2Boardcast(organize,false,user,"dropOrganize","dropOrganize")
    //将队伍从队伍池中删除
    organize2Pool.removeOrganizeAsUser(req.body.user.user)
    res.send()
})

router.get("/",(req,res) => {
    res.send("欢迎来到火星")
});

export = router;