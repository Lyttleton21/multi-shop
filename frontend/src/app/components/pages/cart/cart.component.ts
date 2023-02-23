import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { Cart } from 'src/app/shared/models/Cart';
import { CartItem } from 'src/app/shared/models/Cartitem';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cart!:Cart;

  constructor(private activatedRoute:ActivatedRoute,
    private cartService:CartService,
    private router:Router) { }

  ngOnInit(): void {
    this.cartService.getCartObservable()
    .subscribe(data => {
      this.cart = data;
      console.log(this.cart);
    });
  }

  changeQuantityByAdd(cartItem:CartItem, quantityInstring:string){
    let quantity = parseInt(quantityInstring);
    quantity++;
    this.cartService.changeQuantity(cartItem.product.id, quantity);
  }

  changeQuantityByRemove(cartItem:CartItem, quantityInstring:string){
    let quantity = parseInt(quantityInstring);
    quantity--;
    this.cartService.changeQuantity(cartItem.product.id, quantity)
  }

  removeFromCart(cartItem:CartItem){
    this.cartService.removeFromCart(cartItem.product.id)
  }

}
