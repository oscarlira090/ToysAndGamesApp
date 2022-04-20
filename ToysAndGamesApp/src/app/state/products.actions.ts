import { createAction, props } from '@ngrx/store';
import { Product } from '../product-catalog/models/Product';

export const LOAD_PRODUCTS = '[Products] Load Products';
export const LOAD_PRODUCTS_FAIL = '[Products] Load Products Fail';
export const LOAD_PRODUCTS_SUCCESS = '[Products] Load Products Success';

export const loadProducts = createAction(
  LOAD_PRODUCTS
);

export const loadProductsFail = createAction(
  LOAD_PRODUCTS_FAIL
);


export const loadProductsSuccess = createAction(
  LOAD_PRODUCTS_SUCCESS,
  props<{ products: ReadonlyArray<Product> }>()
);

