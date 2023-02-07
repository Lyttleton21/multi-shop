import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-featured-products',
  templateUrl: './featured-products.component.html',
  styleUrls: ['./featured-products.component.css']
})
export class FeaturedProductsComponent implements OnInit {

  featuredProducts: any;
  constructor(private productService:ProductService) { }

  ngOnInit(): void {
    this.productService.featuresProduct()
    .subscribe(data => {
      this.featuredProducts = data;
      //console.log(this.featuredProducts);
    });
  }

}
