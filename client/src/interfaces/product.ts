export interface IProduct {
    _id: string;
    category:string;
    name:string;
    star:number;
    price:number;
    image?:string;
    location?:string;
}