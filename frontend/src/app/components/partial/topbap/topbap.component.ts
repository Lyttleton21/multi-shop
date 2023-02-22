import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { FavouriteService } from 'src/app/services/favourite.service';

@Component({
  selector: 'app-topbap',
  templateUrl: './topbap.component.html',
  styleUrls: ['./topbap.component.css']
})
export class TopbapComponent implements OnInit {
  searchProduct:string = '';
  cartQuantity:number = 0;
  totalfav:number = 0;

  constructor(private activated:ActivatedRoute,
    private router:Router,
    private cartService:CartService,
    private favService:FavouriteService) {}

  ngOnInit(): void {
    this.cartService.getCartObservable()
    .subscribe(cartQuantity => {
      this.cartQuantity = cartQuantity.totalCount;
    });

    this.favService.getFavoriteObservable()
    .subscribe(fav => {
      this.totalfav = fav.total;
    });

    this.activated.params
    .subscribe(params => {
      if(params.searchProduct){
        this.searchProduct = params.searchProduct;
      }
    });
  }

  search(term:string):void{
    if(term){
      this.router.navigateByUrl('/search/'+ term);
    }
  }

}
