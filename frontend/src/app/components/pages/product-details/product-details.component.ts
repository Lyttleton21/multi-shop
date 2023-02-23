import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';
import { Cart } from 'src/app/shared/models/Cart';
import { Product } from 'src/app/shared/models/product';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product:any;
  addToCart!:FormGroup;
  productsMayAlsoLike:any;

  constructor(private productService:ProductService,
    private activatedRoute: ActivatedRoute,
    private router:Router,
    private formBuilder:FormBuilder,
    private cartservice:CartService
    ) { }

  ngOnInit(): void {
    this.activatedRoute.params
    .subscribe(params => {
      if(params.id){
        this.productService.getProductsById(params.id)
        .subscribe(product => {
          this.product = product;
          //console.log(this.product);
          if (this.product) {
            this.productService.getProductByCartgory(this.product.categoty)
            .subscribe(product => {
              this.productsMayAlsoLike = product;
              //console.log(this.productsMayAlsoLike);
            });
          }
        });
      }
    });

    this.addToCart = this.formBuilder.group({
      color: [''],
      size:['']
    });

  }

  get fc(){
    return this.addToCart.controls;
  }

  //color: this.fc.color.value;
  addToCartFromDetailsPage(product: Product){
    let color = this.fc.color.value;
    let size = this.fc.size.value;
    //console.log(color);
    this.cartservice.addToCart(product, color, size);
    this.router.navigateByUrl('/cart-page');
  }

}
