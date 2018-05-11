import { update } from "../mongoose/CURD/update";
import { usersModel } from "../mongoose/model/usersModel";
import { Config } from "../../interfaces/config.type";
import { productModel } from "../mongoose/model/productModel";
const config:Config = require("../config/config.json")

/**
 * 初始化函数
 */
export let initFunc = async function(){
    //更新用户在线状态
    await update(usersModel, {}, {$set:{isLine:false}})

    //初始化商品
    await update(productModel, {name:"铅笔"},{$set:{
        name:"铅笔",
        img:"/files/products/pencil.png",
        price:100,
        func:JSON.stringify({func:() => console.log("i'm a func")})
    }},{upsert:true})
}