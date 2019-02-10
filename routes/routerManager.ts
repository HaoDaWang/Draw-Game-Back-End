import { Router, Express } from 'express-serve-static-core'
import * as path from 'path'
import * as express from 'express';
import { findUser as find } from '../modules/mongoose/CURD/find';
import { usersModel } from '../modules/mongoose/model/usersModel';
import { ReturnData } from '../interfaces/return-data.interface';
import { add } from '../modules/mongoose/CURD/add';
import { update } from '../modules/mongoose/CURD/update';
import { remove } from '../modules/mongoose/CURD/remove';
import { organizeManager as organize } from '../modules/organize/organize';
import { sendMsg } from '../modules/sendMsg/send-msg';
import { addFriend } from '../modules/addFriend/addFriend';
import { upload } from '../modules/upload/upload';
import { Config } from '../interfaces/config.type';
import { removeFile } from '../modules/removeFile/removeFile';
import { userMap } from '../modules/userMap/userMap';
import { readyQueue } from '../modules/readyQueue/readyQueue';
import { Organize2 } from '../modules/organize2/organize2';
import { organize2Pool } from '../modules/organize2/organize2pool';
import { room } from '../modules/room/room';
import { userCanDraw } from '../modules/userCanDraw/userCanDraw';
import { productModel } from '../modules/mongoose/model/productModel';
import { personPool } from '../modules/person/personPool';
import { Room } from '../interfaces/room.interface';
import { match2 } from '../modules/match2/match2';
const config:Config = require("../modules/config/config.json")
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
    // res.send({successful:gameQuestion.getQuestion()});
});

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
    let roomID = req.body.roomID

    //更新准备队列
    let q = room.findRoom(roomID)
    if(!q) throw new Error("准备队列：找不到指定roomID的room")
    for(let obj of q.readyQueue){
        if(obj.user == user) obj.isReady = true
    }

    for(let obj of q.readyQueue){
        let s = userMap.getUserMap().get(obj.user)
        if(!s) throw new Error("准备队列：找不到指定的socket")
        s.emit("userMsg",{
            msg:{
                username:"",
                body:{
                    roomID:roomID,
                    queue:q.readyQueue
                }
            },
            tag:"readyQueue"
        })
    }
    
    //准备人数+1
    q.readyIndex++
    //全部准备
    if(q.readyIndex == q.users.length){
        //通知客户端匹配成功
        for(let obj of q.readyQueue){
            let s = userMap.getUserMap().get(obj.user)
            if(!s) throw new Error("准备队列：找不到指定的socket")
            s.emit("matchSuccessful",roomID);          
        }
    }

    // match.userReady()
    res.end()
})

//将用户从匹配队列中删除
router.post("/removeUserToMatch",(req, res) => {
    // match.removeUser(req.body.user)
    personPool.removeUser(req.body.user)
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
    if(!organize) throw new Error("用户进入队伍：找不到该队伍")
    organize2Boardcast(organize,true,"",organize.getOrganize(),"updateOrganize")
    res.send({organize:organize.getOrganize()})
})

//从队伍将用户删除
router.post("/removeUserInOrganize2",(req, res) => {
    console.log(`将用户 ${req.body.user.user} 从队伍中删除`)
    let organize = addAndRemove(req, "remove")
    if(!organize) {
        res.send({})
        return
    }
    console.log(organize.getOrganize())
    organize2Boardcast(organize,true,"",organize.getOrganize(),"updateOrganize")
    res.send({organize:organize.getOrganize()})
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

//修改积分
router.post("/updatePoint",(req, res) => {
    let pointValue = req.body.pointValue
    let user = req.body.user
    console.log(pointValue,user);
    (async function(){
        await update(usersModel,{user:user},{$inc:{point:pointValue}})
        res.send({})
    })()
})
//修改金币
router.post("/updateMoney",(req, res) => {
    let moneyValue = req.body.moneyValue
    let user = req.body.user
    console.log(moneyValue,user);
    (async function(){
        await update(usersModel,{user:user},{$inc:{money:moneyValue}})
        res.send({})
    })()
})

//读取积分
router.post("/readPoint",(req, res) => {
    let user = req.body.user
    (async function(){
        let result = await find(usersModel,{user:user},{_id:0,point:1})
        if(result.err) console.log(result.err)
        else res.send(result)
    })()
})
//读取金币
router.post("/readMoney",(req, res) => {
    let user = req.body.user
    (async function(){
        let result = await find(usersModel,{user:user},{_id:0,money:1})
        if(result.err) console.log(result.err)
        else res.send(result)
    })()
})

//获取正确答案
router.post("/getRightAnswer", (req ,res) => {
    let roomID:number = req.body.roomID
    let r = room.findRoom(roomID)
    let rightAnswer = null
    if(r) rightAnswer =  r.currentQuestion
    res.send({rightAnswer:rightAnswer})
})

//获取商品
router.get("/getAllProducts",(req, res) => {
    (async function() {
        let result = await find(productModel,{},{_id:0})
        res.send({products:result.successful})
    })()
})

//组队匹配
router.post("/organizeMatch",(req, res) => {
    let captain = req.body.user
    let isMatch = req.body.isMatch
    let organize = organize2Pool.getOrganize(captain)
    if(!organize) throw new Error("organizeMatch:未找到指定队伍")
    organize.isMatch = isMatch
    
    //广播队伍中的用户取消或开始匹配
    for(let organizeUser of organize.getOrganize()){
        if(organizeUser != organize.getOrganize()[0])sendMsg(organizeUser.user,"","",`Match${isMatch}`)
    }
    
    match2.judge()
    res.send({})
})

//购买商品
router.post("/buyProduct",async (req, res) => {
    //购买的用户
    let user = req.body.user
    //话费的金额
    let value = req.body.money
    //商品的名称
    let name = req.body.name
    //返回的对象
    let returnObj:ReturnData = {}
    
    let t = await find(usersModel, {user:user},{tools:1})
    if(t.successful[0].tools.indexOf(name) != -1) {
        res.send({err:"已经购买了此商品"})
    }
    
    let toolsData = (await find(productModel, {name:name})).successful[0]

    let result = await find(usersModel,{user:user},{money:1})
    let money = result.successful[0].money
    //检查是否有足够的金额
    if(money - value < 0) returnObj.err = "没有足够的金额"
    else {
        await update(
            usersModel,
            {user:user},
            {
                $inc:{money:-value},
                $push:{tools:{
                    name:toolsData.name,
                    img:toolsData.img,
                    use:toolsData.use,
                    price:toolsData.price
                }}
            }
        )
        returnObj.successful = ""
    }
    
    res.send(returnObj)
})

router.get("/",(req,res) => {
    res.sendFile("../public/index.html")
});

export = router;