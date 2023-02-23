import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FEATURED_PRODUCTS_URL, GET_PRODUCTS_BY_CARTGORY_URL, GET_SINGLE_PRODUCTS_URL, SEARCH_PRODUCTS_URL } from '../shared/constants/url';
import { Product } from '../shared/models/product';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }

  featuresProduct():Observable<any>{
    return this.http.get<any>(FEATURED_PRODUCTS_URL);
  }

  getProductsBySearch(SearchTerm:string){
    return this.http.get(SEARCH_PRODUCTS_URL + SearchTerm)
  }

  getProductsById(id:any){
    return this.http.get<Product>(GET_SINGLE_PRODUCTS_URL + id)
  }

  getProductByCartgory(cartgory:string){
    return this.http.get<Product>(GET_PRODUCTS_BY_CARTGORY_URL + cartgory);
  }
}
