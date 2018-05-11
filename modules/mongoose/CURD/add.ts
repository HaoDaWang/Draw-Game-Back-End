import { Model, Document, Error } from "mongoose";

/**
 * 增加文档到集合
 */

export function add(model:Model<Document>, saveJSON:any):Promise<any>{
    return new Promise((resolve, reject) => {
        let entity:Document = new model(saveJSON);
        entity.save((err:Error,docs:any) => {
            if(err) reject(err);
            console.log("保存成功");
            resolve(docs);
        });
    });
} 