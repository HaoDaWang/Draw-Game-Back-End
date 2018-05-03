import * as multer from 'multer'
/**
 * 利用multer上传文件模块
 */

export let upload = function(path:string){
    //multer配置
    let storage = multer.diskStorage({
        //目标存储位置
        destination:(req, file, cb) => {
           cb(null, `./public/files/${path}`)
        },
        //文件重命名
        filename:(req, file, cb) => {
            let suffix = (file.originalname).split(".")
            cb(null, file.fieldname + "-" + Date.now() + "." + suffix.pop())
        }
    })   
    
    return multer({storage:storage})
}