import * as fs from 'fs'

/**
 * 功能：删除传入的路径的文件
 * @param filePath 需要删除的文件的路径
 */
export let removeFile = function(filePath:string){
    return new Promise<boolean>((resolve:any, reject:any) => {
        fs.unlink(filePath,err => {
            if(err) {
                reject(err)
                return
            }
            resolve(true)
        })
    })
}