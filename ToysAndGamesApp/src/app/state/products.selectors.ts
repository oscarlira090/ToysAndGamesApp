import { createSelector, createFeatureSelector } from '@ngrx/store';
import { Product } from '../product-catalog/models/Product';

export const selectProduct = createFeatureSelector<ReadonlyArray<Product>>('products');

