import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { FavouriteService } from 'src/app/services/favourite.service';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/shared/models/product';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  featuredProducts: any;
  constructor(private productService:ProductService,
    private activatedRoute:ActivatedRoute,
    private router:Router,
    private cartService:CartService,
    private favService:FavouriteService) { }

  ngOnInit(): void {
    this.activatedRoute.params
    .subscribe((data) => {
      if(data.searchProduct){
        this.productService.getProductsBySearch(data.searchProduct)
        .subscribe(search => {
          this.featuredProducts = search;
          //console.log(this.featuredProducts);
        });
      }else{
        this.productService.featuresProduct()
        .subscribe(data => {
          this.featuredProducts = data;
        });
      }
    });
  }

  // addToCart(id:any){
  //   this.cartService.addToCartFromHome(id)
  // }

  addToCart(product:Product){
    this.cartService.addToCart(product);
    this.router.navigateByUrl('/cart-page');
  }

  addToFavorite(product:Product){
    this.favService.addToFavorite(product);
    this.router.navigateByUrl('/favorite-page');
  }

}
