import { Injectable } from '@angular/core';
import { Favourite } from '../shared/models/favourite';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../shared/models/product';
import { CartItem } from '../shared/models/Cartitem';

@Injectable({
  providedIn: 'root'
})
export class FavouriteService {
  private favorite:Favourite =
  //  {
  //   items: [],
  //   total:0
  // } ||
   this.getFavoriteFormLocalStorage();
  private favoriteSubject: BehaviorSubject<Favourite> = new BehaviorSubject(this.favorite);

  constructor() { }

  addToFavorite(product:Product){
    let favoriteItem = this.favorite.items
    .find(fav => fav.product.id === product.id);
    if (favoriteItem) {
      alert(`${product.name} was already added to Favorite`);
      return;
    } else {
      this.favorite.items.push(new CartItem(product));
      this.setFavoriteToLocalStorage();
    }
  }

  removeFromFavorite(productId: string){
    this.favorite.items = this.favorite.items
    .filter((item) => item.product.id != productId);
    this.setFavoriteToLocalStorage();
  }

  clearFavorite(){
    this.favorite.items = [];
    this.setFavoriteToLocalStorage();
  }

  getFavoriteObservable(){
    return this.favoriteSubject.asObservable();
  }

  getFavorite(){
    return this.favoriteSubject.value;
  }

  private setFavoriteToLocalStorage(){
    this.favorite.total = this.favorite.items
    .reduce((prevSum, currentItem) => prevSum + currentItem.quantity, 0);
    const favoriteJSON = JSON.stringify(this.favorite);
    localStorage.setItem('favorite', favoriteJSON);
    this.favoriteSubject.next(this.favorite);
  }

  public getFavoriteFormLocalStorage(){
    const favoriteJSON = JSON.parse(localStorage.getItem('favorite') || `{}`);
    return favoriteJSON;
  }
}
