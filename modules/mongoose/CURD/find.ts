import { Model, Document, Error } from "mongoose";

/**
 * 查找指定模型的信息
 */
 
export function findUser(model:Model<Document>,queryJSON:any, screen?:any):Promise<{successful?:any,err?:any}>{
    return new Promise((resolve,reject) => {
        model.find(queryJSON,screen || {},(err:Error,docs:any) => {
            if(err) reject(err);
            console.log("查询成功");
            if(docs.length == 0){
                resolve({err:"empty"});
            }
            else {
                resolve({successful:docs});
            }
        });
    });
}