import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { ProductService } from '../product-catalog/ProductService';
import { retrievedProductList, retrievedProductListSuccess } from '../state/products.actions';

@Injectable()
export class ProductEffects {

  loadProducts$ = createEffect(() => this.actions$.pipe(
    ofType(retrievedProductList),
    mergeMap(() => this.productService.getProducts()
      .pipe(
        map(products => retrievedProductListSuccess({ products})),
        catchError(() => EMPTY)
      ))
  )
  );

  constructor(
    private actions$: Actions,
    private productService: ProductService
  ) { }
}
