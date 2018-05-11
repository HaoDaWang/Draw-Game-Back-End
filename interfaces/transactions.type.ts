export interface TransactionsDoc{
    _id:string,
    source:string,
    destination:string,
    value:number,
    state:string,
    lastModified:Date
}