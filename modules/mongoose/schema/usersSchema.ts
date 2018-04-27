import * as mongoose from 'mongoose';

export let usersSchema:mongoose.Schema = new mongoose.Schema({
    user:{type:String}, //用户名
    passw:{type:String}, //密码
    point:{type:Number,default:0}, //积分
    friends:{type:Array,default:[]}, //好友
    isLine:{type:Boolean,default:false}, //在线状态
    isFree:{type:Boolean,default:true} //空闲状态
});