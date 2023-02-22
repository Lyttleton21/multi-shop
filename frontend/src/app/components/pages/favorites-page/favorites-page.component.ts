import { Component, OnInit } from '@angular/core';
import { FavouriteService } from 'src/app/services/favourite.service';
import { CartItem } from 'src/app/shared/models/Cartitem';
import { Favourite } from 'src/app/shared/models/favourite';

@Component({
  selector: 'app-favorites-page',
  templateUrl: './favorites-page.component.html',
  styleUrls: ['./favorites-page.component.css']
})
export class FavoritesPageComponent implements OnInit {
  favourites!:Favourite;

  constructor(private favService:FavouriteService) { }

  ngOnInit(): void {
    this.favService.getFavoriteObservable()
    .subscribe(favs => {
      this.favourites = favs;
      //console.log(this.favourites);
    });
  }

  removeFromFavourite(cartItem: CartItem){
    this.favService.removeFromFavorite(cartItem.product.id);
  }

}
