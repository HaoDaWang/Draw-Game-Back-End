import { Error } from "mongoose";

import * as mongoose from 'mongoose';

//建立与数据库的连接
export let db:mongoose.Connection = mongoose.createConnection("mongodb://localhost:27017/DrawGame");

//连接成功监听
db.on("connected",() => {
    console.log("mongodb connect successful");
})

//断开连接监听
db.on("disconnected",() => {
    console.log("disconnected");
});

//错误监听
db.on("error",(err:Error) => {
    console.log(`mongodb have error is ${JSON.stringify(err)}`);
});