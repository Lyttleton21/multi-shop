import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { FavouriteService } from 'src/app/services/favourite.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  cartQuantity: number = 0;
  totalFavorite:number = 0;

  constructor(private cartService:CartService,
    private favService:FavouriteService) { }

  ngOnInit(): void {
    this.cartService.getCartObservable()
    .subscribe(cartQuantity => {
      this.cartQuantity = cartQuantity.totalCount;
    });

    this.favService.getFavoriteObservable()
    .subscribe(totalFavorite => {
      this.totalFavorite = totalFavorite.total;
    });
  }



}
