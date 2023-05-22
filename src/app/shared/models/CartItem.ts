
import { Tech } from "./Tech";

export class CartItem {

    constructor(
        tech : Tech
    ){
        this.tech = tech
    }
    tech : Tech
    quantity : number = 1;

    get price() : number {
        return this.tech.price * this.quantity
    }
}