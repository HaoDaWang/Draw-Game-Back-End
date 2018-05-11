import { Model, Document, Error } from "mongoose";

/**
 * 更新指定模型的信息
 */

export function update(model:Model<Document>, queryJSON:any, updateJSON:any, options?:any){
    return new Promise((resolve, reject) => {
        model.update(queryJSON,updateJSON,options || {},(err:Error,docs:any) => {
            if(err) reject(err);
            console.log("更新成功");
            resolve(docs);
        });
    });
}