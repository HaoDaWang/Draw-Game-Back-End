import { Model, Document } from "mongoose";

/**
 * 获取问题
 */

export let getQuestionRecord = async function(model:Model<Document>, index:number){
    return new Promise<string>((resolve:any, reject:any) => {
        model.find({}).skip(index).limit(1).exec((err:any, res:{_id:string,name:string}[]) => {
            if(err) {
                reject(err)
                return
            }
            console.log(res)
            resolve(res[0].name)
        })
    })
}