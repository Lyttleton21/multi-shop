import { CartItem } from "./Cartitem";
import { Product } from "./product";

export class Cart{
  items:CartItem[] = [];
  totalPrice:number = 0;
  totalCount:number = 0;
  // items:[] = [];
  // quantity:number = 1;
  // price:number = this.product.price;
}
