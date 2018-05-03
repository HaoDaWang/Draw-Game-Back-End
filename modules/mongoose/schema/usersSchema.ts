import * as mongoose from 'mongoose';

export let usersSchema:mongoose.Schema = new mongoose.Schema({
    user:{type:String}, //用户名
    passw:{type:String}, //密码
    point:{type:Number,default:0}, //积分
    friends:{type:Array,default:[]}, //好友
    isLine:{type:Boolean,default:false}, //在线状态
    isFree:{type:Boolean,default:true}, //空闲状态
    headImg:{type:String,default:"/files/headImg/headImg.jpg"}, //头像路径
    money:{type:Number,default:0}, //金币
    sex:{type:String, default:"unknow"}, //性别
    age:{type:Number, default:-1},
    tools:{type:{
        paint:{type:Array,default:[]} //画笔集
    }},
    records:{type:Array,default:[]} //战绩
});