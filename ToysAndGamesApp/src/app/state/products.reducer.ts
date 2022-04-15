import { createReducer, on } from '@ngrx/store';

import { retrievedProductList, retrievedProductListSuccess } from './products.actions';
import { Product } from '../product-catalog/models/Product';

export const initialState: ReadonlyArray<Product> = [];
/*
export const initialState: {
  products: ReadonlyArray<Product>;
  loading: boolean;
} = { loading: false, products: [] }
*/
export const productsReducer = createReducer(
  initialState,
  on(retrievedProductListSuccess, (state, { products }) => products),
  //on(retrievedProductList, (state) => { return { ...state, loading: false } }),
);
