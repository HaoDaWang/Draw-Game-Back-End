import { questionModel } from "../mongoose/model/questionModel";
import { getRecordCount } from "../mongoose/CURD/getRecordCount";
import { getQuestionRecord } from "./getQuestionRecord";

/**
 * 抽题系统
 */
export class GameQuestion{
    questions:Array<string> = ["啊啊啊","噢噢噢噢","呃呃呃"];
    //目前的题目
    currentQuestion:string = "狗";

    //获取新题目
    async getQuestion():Promise<string>{
        while(true){
            //获取问题总数
            let count = await getRecordCount(questionModel)
            //生成伪随机数
            let index:number = parseInt((Math.random() * (count - 1)).toString());
            //获取问题
            this.currentQuestion = await getQuestionRecord(questionModel, index)
            console.log("--------------------")
            console.log(`题目 ： ${this.currentQuestion}`)
            console.log("--------------------")
            if(this.currentQuestion == "") continue
            else break
        }
        return this.currentQuestion;
    }

    //获取当前的题目
    getCurrentQuestion(){
        return this.currentQuestion;
    }
}

export let gq:GameQuestion = new GameQuestion();