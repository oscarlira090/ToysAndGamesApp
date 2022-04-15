import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable, of } from 'rxjs';
import { Store } from '@ngrx/store';

import {
  retrievedProductList
} from '../state/products.actions';

@Injectable({
  providedIn: 'root'
})
export class ProductsResolver implements Resolve<void> {

  constructor(private store: Store) {

  }

  resolve(): void {
    this.store.dispatch(retrievedProductList());
  }

}
