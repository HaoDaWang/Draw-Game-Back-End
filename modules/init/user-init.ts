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
    await update(productModel, {name:"彩虹笔"},{$set:{
        name:"彩虹笔",
        img:`${config.PRODUCT_PATH}rainbow.png`,
        price:100,
        use:"rainbow"
    }},{upsert:true})

    await update(productModel, {name:"空心笔"},{$set:{
        name:"空心笔",
        img:`${config.PRODUCT_PATH}hollow.png`,
        price:0,
        use:"hollow"
    }},{upsert:true})
}