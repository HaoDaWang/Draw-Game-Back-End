import { Model, Document, Error } from "mongoose";

/**
 * 删除指定模型文档
 */

export function remove(model:Model<Document>,queryJSON:any){
    return new Promise((resolve,reject) => {
        model.remove(queryJSON,(err:Error) => {
            if(err) reject(err);
            console.log("删除成功");
            resolve({successful:"删除成功"});
        });
    });
}