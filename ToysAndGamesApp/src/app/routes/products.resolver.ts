import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { ProductService } from '../product-catalog/ProductService';
import { Product } from '../product-catalog/models/Product';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsResolver implements Resolve<Array<Product>> {

  constructor(private productService: ProductService) {

  }

  resolve(): Observable<Array<Product>> {
    return this.productService.getProducts();
  }

}
