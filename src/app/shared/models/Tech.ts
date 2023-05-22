export class Tech{
    id!:number;
    name!:string;
    price!:number;
    tags?:string[];
    favorite:boolean = false;
    stars:number = 0;
    imagePath!:string;
    origins!:string[];
}