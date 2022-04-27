import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Store } from '@ngrx/store';

import {
  loadProducts
} from '../state/products.actions';

@Injectable({
  providedIn: 'root'
})
export class ProductsResolver implements Resolve<void> {

  constructor(private store: Store) {

  }

  resolve(): void {
    this.store.dispatch(loadProducts());
  }

}
