import { createAction, props } from '@ngrx/store';
import { Product } from '../product-catalog/models/Product';


export const retrievedProductList = createAction(
  '[Product List] Retrieve Product'
);

export const retrievedProductListSuccess = createAction(
  '[Product List/API] Retrieve Products Success',
  props<{ products: ReadonlyArray<Product> }>()
);

