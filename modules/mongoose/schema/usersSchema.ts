import * as mongoose from 'mongoose';
import { Organize2 } from '../../organize2/organize2';
import { Config } from '../../../interfaces/config.type';
const config:Config = require("../../config/config.json")

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
    age:{type:Number, default:-1},    //年龄
    tools:{type:Array, default:[
        {
            name:"橡皮擦",
            img:`${config.PRODUCT_PATH}eraser.png`,
            price:-1
        },
        {
            name:"铅笔",
            img:`${config.PRODUCT_PATH}pencil.png`,
            price:-1
        },
        {
            name:"刷子",
            img:`${config.PRODUCT_PATH}make.png`,
            price:-1
        }
    ]},    //购买的工具
    records:{type:Array,default:[]} //战绩
});