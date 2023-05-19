import { Component, OnInit } from '@angular/core';
import { Cart } from 'src/app/shared/models/Cart';
import { CartItem } from 'src/app/shared/models/CartItem';
import { CartService } from 'src/app/shared/services/cart.service';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.scss']
})
export class CartPageComponent implements OnInit {

  //@ts-ignore
  cart : Cart
  constructor(
    private cartService : CartService
  ){}

  removeFromCart(cartItem : CartItem){
    this.cartService.removeFromCart(cartItem.tech.id)
    this.setCart()
  }

  changeQuantity(cartItem : CartItem, quantityInString : string) {
    const quantity = parseInt(quantityInString)
    this.cartService.changeQuantity(cartItem.tech.id, quantity)
    this.setCart()
  }

 
  
  ngOnInit(): void {
    
  }

  setCart(){
    this.cart = this.cartService.getCart()
  }

}
