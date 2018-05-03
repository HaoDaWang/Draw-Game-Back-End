import { Model, Document } from "mongoose";

/**
 * 获取集合的文档的个数
 */

export let getRecordCount = function(model:Model<Document>){
    return new Promise<number>((resolve:any, reject:any) => {
        model.find({}).count((err:any, count:number) => {
            if(err){
                reject(err)
                return
            }
            resolve(count)
        })       
    })
}