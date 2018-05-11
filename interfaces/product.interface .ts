export interface Product{
    name:string,    //商品的名称
    img:string,    //商品的图标路径
    price:number,    //商品的价格
    func:Function    //商品的功能 给canavs2dDOM附加属性
}