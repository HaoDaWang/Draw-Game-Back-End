import { Router, Express } from 'express-serve-static-core'
import * as path from 'path'
import * as express from 'express';
import { findUser as find } from '../modules/mongoose/CURD/find';
import { usersModel } from '../modules/mongoose/model/usersModel';
import { ReturnData } from '../interfaces/return-data.interface';
import { add } from '../modules/mongoose/CURD/add';
import { update } from '../modules/mongoose/CURD/update';
import { remove } from '../modules/mongoose/CURD/remove';
import { GameQuestion } from '../modules/gameQuestion/game-question';
import { organizeManager as organize } from '../modules/organize/organize';
import { sendMsg } from '../modules/sendMsg/send-msg';
import { addFriend } from '../modules/addFriend/addFriend';
const gameQuestion:GameQuestion = new GameQuestion();
const router:Router = express.Router();

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

//添加好友
router.post('/addFriend',(req,res) => {
    res.send({})
    // (async function(){
    //     //查询是否有此好友
    //     let findResult:any = await find(usersModel,{user:req.body.user});
    //     let arr = findResult.successful[0].friends;
    //     for(let val of arr){
    //         if(val == req.body.targetUser){
    //             res.send({err:"已经添加过此好友"});
    //             return;
    //         }
    //     }
        
        // //发送给指定用户请求
        // sendMsg(
        //     req.body.targetUser,
        //     req.body.user,
        //     req.body.msg,
        //     "addFriend"
        // )

        // //查询JSON
        // let queryJSON = {
        //     "user":req.body.user
        // };
        // //更新JSON
        // let updateJSON = {
        //     $push:{
        //         friends:{"user":req.body.targetUser}
        //     }
        // };
        // let result = await update(usersModel,queryJSON,updateJSON);
        // res.send({successful:result});
    // })();
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


// router.post("sendMsg",(req,res) => {
//     

//     //结束响应
//     res.send({})
// })

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
            result.push({user:user.successful[0].user,isLine:user.successful[0].isLine});           
        } 
        res.send({successful:result});
    })();
});

//获取游戏问题
router.get('/getQuestion',(req,res) => {
    res.send({successful:gameQuestion.getQuestion()});
});

//队伍添加成员
router.post('/addOrganizeUser',(req,res) => {
    console.log(req.body.first,req.body.userName);
    organize.addUser(req.body.first,req.body.userName);
    console.log(`现在的组队数组形如 ： ${JSON.stringify(organize.organizes)}`);
    res.send({successful:"添加成功"});
});

//队伍删除成员
router.post('/removeOrganizeUser',(req,res) => {
    organize.removeUser(req.body.first,req.body.userName);
    console.log(`现在的组队数组形如 ： ${JSON.stringify(organize.organizes)}`);
    res.send({successful:"删除成功"});    
})

//获取队伍信息
router.post('/getOrganizeInfo',(req,res) => {
    res.send({successful:organize.getOrganizes(req.body.first)});
})

//销毁队伍
router.post('/dropOrganize',(req,res) => {
     organize.dropOrganizes(req.body.first);
     res.send({successful:"销毁成功"});
});

//设置用户空闲状态
router.post("/setFreeState",(req,res) => {
    (async function(){
        let result = await update(usersModel,{user:req.body.user},{$set:{isFree:req.body.isFree}});
        res.send({successful:result});
    })();
});

router.get("/",(req,res) => {
    res.render('index', { title: 'Express' });
});

export = router;