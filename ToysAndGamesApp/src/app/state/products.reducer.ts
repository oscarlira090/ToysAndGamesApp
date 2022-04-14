import { createReducer, on } from '@ngrx/store';

import { retrievedProductList } from './products.actions';
import { Product } from '../product-catalog/models/Product';

export const initialState: ReadonlyArray<Product> = [];

export const productsReducer = createReducer(
  initialState,
  on(retrievedProductList, (state, { products }) => products)
);

