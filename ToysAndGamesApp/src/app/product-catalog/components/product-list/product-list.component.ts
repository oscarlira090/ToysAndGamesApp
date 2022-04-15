import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../models/Product';
import { Response } from '../../models/Response';
import { ProductService } from '../../ProductService';
import { Router, ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';


//state

import {  selectProduct } from '../../../state/products.selectors';

@Component({
  selector: 'product-list',
  templateUrl: './/product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})


export class ProductListComponent implements OnInit {

  //state
  products$ = this.store.select(selectProduct);

  loading: boolean = false;
  saved: boolean = false;
  productToRemove: number = 0;

  constructor(private store: Store, private router: Router, private actDataRoute: ActivatedRoute, private productService: ProductService) { }

  ngOnInit() {
    this.getProducts();
    this.saved = (this.actDataRoute.snapshot.paramMap.get('saved') === 'true');
    setTimeout(() => {
      this.saved = false;
    }, 4000)
  }

  getProducts(): void {
    this.loading = true;
    //this.store.dispatch(retrievedProductList());
    /*
    this.actDataRoute.data.subscribe((data: any ) => {
      setTimeout(() => {
        console.log(data)
        this.store.dispatch(retrievedProductList(  ));
        this.loading = false;
      }, 500)
     
    });*/
  }

  addProduct() {
    //this.router.navigate(['/product-add', { product: JSON.stringify(new Product()) }],);
    this.router.navigate(['/product-add', {  }],);
  }

  editProduct(product:Product) {
    //this.router.navigate(['/product-add', { product: JSON.stringify(product) }],);
    this.router.navigate(['/product-add', product.id]);
  }

  removeProduct() {
    if (this.productToRemove == 0)
      return;

    this.productService.removeProduct(this.productToRemove).subscribe((msg: Response) => {
      this.router.navigate(['/product-list', { removed: true }],);
    });
  }

}
