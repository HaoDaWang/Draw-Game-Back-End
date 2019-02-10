import { Schema } from "mongoose";

/**
 * 商品集合
 */

export let productSchema:Schema = new Schema({
    name:{type:String},    //商品名称
    img:{type:String},    //商品图标路径
    price:{type:Number},    //商品的价格
    use:{type:String}
})