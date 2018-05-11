export interface Config{
    defaultHeadImg:Array<string>,    //默认的头像路径
    MATCH_COUNT:number,    //匹配的最大人数
    MIN_POINT:number,    //最小积分
    MAX_TIME:number,    //最大超时时间
    NEXT_GAME_TIME:number,    //开始下一轮游戏的等待时间
    PRODUCT_PATH:string    //商品的路径
}