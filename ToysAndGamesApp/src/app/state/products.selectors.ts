import { createSelector, createFeatureSelector } from '@ngrx/store';
import { Product } from '../product-catalog/models/Product';
import { AppState } from './app.state';
import * as fromProducts from './products.reducer';

//First approach
//export const selectProduct = createFeatureSelector<ReadonlyArray<Product>>('products');

export const selectFeatureProductState =
  createFeatureSelector<AppState>('data');

//export const selectedProducts = (state: AppState) => state.products;



//export const selectProduct =
  //createSelector(
    //selectedProducts,
    //(products: ReadonlyArray<Product>) => { return products });


export const selectProduct =
  createSelector(selectFeatureProductState, (state: AppState) => {
    return Object.keys(state.entities).map(id => state.entities[parseInt(id, 10)]);
  });


export const selectLoading =
  createSelector(selectFeatureProductState, (state: AppState) => state.loading);


export const selectLoaded =
  createSelector(selectFeatureProductState, (state: AppState) => state.loaded);

