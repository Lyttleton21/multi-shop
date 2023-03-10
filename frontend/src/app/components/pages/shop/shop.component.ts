import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { FavouriteService } from 'src/app/services/favourite.service';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/shared/models/product';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
  products:any;
  showSorting:boolean= false;
  isShowing:boolean= false;

  selectedButtonValue:any = 'price-all';

  constructor(private productService:ProductService,
    private activatedRoute:ActivatedRoute,
    private router:Router,
    private cartService:CartService,
    private favService:FavouriteService,
    private meta:Meta,
    private title:Title) { }

  ngOnInit(): void {
    this.activatedRoute.params
    .subscribe(data => {
      if(data.searchProduct){
        this.productService.getProductsBySearch(data.searchProduct)
        .subscribe(data => {
          this.products = data;
          //console.log(this.products);
        });
      }
      else{
        this.productService.featuresProduct()
        .subscribe(data => {
          this.products = data;
          //console.log(this.products);
        });
      }
    });
  }

  changeSorting(){
    this.showSorting = !this.showSorting;
  }

  addToCart(product:Product){
    let color = '';
    let size = '';
    this.cartService.addToCart(product, color, size);
    this.router.navigateByUrl('/cart-page');
  }


  addToFavorite(product:Product){
    this.favService.addToFavorite(product);
    this.router.navigateByUrl('/favorite-page');
  }


  onButtonSelectionChange(data: any){
    this.selectedButtonValue = data;
    //console.log(this.selectedButtonValue);
  }

}
