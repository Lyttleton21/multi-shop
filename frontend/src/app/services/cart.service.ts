import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Cart } from '../shared/models/Cart';
import { CartItem } from '../shared/models/Cartitem';
import { Product } from '../shared/models/product';
import { ProductService } from './product.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart:Cart = this.getCartFromLocalStorage();
  private cartSubject: BehaviorSubject<Cart> = new BehaviorSubject(this.cart);

  constructor(private productService:ProductService) {
   }

  addToCart(product:Product, color:string, size:string):void{
    let cartItem = this.cart.items
    .find(c => c.product.id === product.id);
    if (cartItem) {
      //if the selected product is already in the cart do Nothing;
      alert(`${product.name} was already added to Cart`);
      return;
    } else {
      this.cart.items.push(new CartItem(product));
      let $cartItem = this.cart.items
      .find(c => c.product.id === product.id);
      if (!$cartItem) {
        // if it return undefined
        return;
      } else {
        $cartItem.selectedColor = color;
        $cartItem.selectedSize = size;
      }
      this.setCartToLocalStorage();
    }
  }
//cartProd:any
  addToCartFromHomePage(id:string){
    console.log(id);
    this.productService.getProductsById(id)
    .subscribe((product:Product) => {
      // console.log(product);
      // let cartItem = this.cart.items
      // .find(p => p.product.id ===product.id);
      // if (cartItem) {
      //   return;
      // } else {
      //   this.cart.items.push(new CartItem(product));
      //   this.setCartToLocalStorage();
      // }
    });

  }

  removeFromCart(productId: string):void{
    this.cart.items = this.cart.items
    .filter( (item) => item.product.id != productId);
    this.setCartToLocalStorage();
  }

  changeQuantity(productId: string, quantity: number):void{
    let cartItem = this.cart.items
    .find(item => item.product.id === productId);
    if(!cartItem){
      return;
    }else{
      cartItem.quantity = quantity;
      cartItem.price = quantity * cartItem.product.price;
    }
    this.setCartToLocalStorage();
  }

  changeColor$size(color: string, productId:string){
    console.log(productId);
    let cartItem = this.cart.items
    .find(item => item.product.id === productId)
    if (!cartItem) {
      return;
    } else {
      cartItem.selectedColor = color;
      //cartItem.selectedSize = size;
    }
  }

  clearCart(){
    this.cart.items = [];
    this.setCartToLocalStorage();
  }

  getCartObservable():Observable<Cart>{
    return this.cartSubject.asObservable();
  }

  getCart(){
    return this.cartSubject.value;
  }

  private setCartToLocalStorage(){
    this.cart.totalPrice = this.cart.items
    .reduce((prevSum, currentItem) => prevSum + currentItem.price, 0);
    this.cart.totalCount = this.cart.items
    .reduce((prevSum, currentItem) => prevSum + currentItem.quantity, 0);
    const cartJSON = JSON.stringify(this.cart);
    localStorage.setItem('Cart', cartJSON);
    this.cartSubject.next(this.cart);
  }

  public getCartFromLocalStorage(){
    const cartJson = JSON.parse(localStorage.getItem('Cart') || `{}`);
    return cartJson;
  }
}
