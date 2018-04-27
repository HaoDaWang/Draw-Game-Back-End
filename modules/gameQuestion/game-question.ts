/**
 * 问题集
 */
export class GameQuestion{
    questions:Array<string> = ["啊啊啊","噢噢噢噢","呃呃呃"];
    //目前的题目
    currentQuestion:string = "狗";

    //获取新题目
    getQuestion():string{
        //取伪随机数
        let index:number = parseInt((Math.random() * (this.questions.length - 1)).toString());
        this.currentQuestion = this.questions[index];
        console.log("--------------------")
        console.log(`题目 ： ${this.questions[index]} ${index}`)
        console.log("--------------------")
        return this.questions[index];
    }

    //获取当前的题目
    getCurrentQuestion(){
        return this.currentQuestion;
    }
}

// export let gameQuestion:GameQuestion = new GameQuestion();