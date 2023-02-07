import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FEATURED_PRODUCTS_URL } from '../shared/constants/url';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }

  featuresProduct():Observable<any>{
    return this.http.get(FEATURED_PRODUCTS_URL);
  }
}
