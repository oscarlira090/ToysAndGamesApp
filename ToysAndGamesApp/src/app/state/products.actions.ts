import { createAction, props } from '@ngrx/store';
import { Product } from '../product-catalog/models/Product';

export const addProduct = createAction(
  '[Product List] Add Product',
  props<{ productId: number }>()
);

export const removeProduct = createAction(
  '[Product Collection] Remove Product',
  props<{ productId: number }>()
);

export const retrievedProductList = createAction(
  '[Product List/API] Retrieve Products Success',
  props<{ products: ReadonlyArray<Product> }>()
);

