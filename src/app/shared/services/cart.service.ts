import { Injectable } from '@angular/core';
import { Cart } from '../models/Cart';
import { TechItemsInterface } from '../interfaces/tech-items.interface';
import { CartItem } from '../models/cartItem';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cart: Cart = new Cart();

  addToCart(tech:TechItemsInterface):void {
    let cartItem = this.cart.items.find(item => item.tech.id === tech.id)
    if(cartItem){
      this.changeQuantity(tech.id, cartItem.quantity + 1)
      return;
    }
    this.cart.items.push(new CartItem(tech))
  }

  removeFromCart(techId:number) :void {
    this.cart.items = 
    this.cart.items.filter(item => item.tech.id != techId)
  }

  changeQuantity(techId : number, quantity : number){
    let cartItem = this.cart.items.find(item => item.tech.id === techId)
    if (!cartItem) return;
    cartItem.quantity = quantity
  }

  getCart() : Cart {
    return this.cart;
  }
}
