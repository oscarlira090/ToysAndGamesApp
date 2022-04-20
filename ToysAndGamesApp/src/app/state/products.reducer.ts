import { createReducer, on } from '@ngrx/store';

import { loadProductsSuccess, loadProducts, loadProductsFail } from './products.actions';
import { Product } from '../product-catalog/models/Product';
import { AppState } from './app.state';

//export const initialState: ReadonlyArray<Product> = [];

export const initialState: AppState = {
  products:[],
  entities: {},
  loaded: false,
  loading: false,
};

/*
export const initialState: {
  products: ReadonlyArray<Product>;
  loading: boolean;
} = { loading: false, products: [] }
*/


export const productsReducer = createReducer(
  initialState,
  on(loadProductsSuccess, (state, { products }) => {
    return {
      ...state,
      products: products,
      entities: //products.reduce(accEntities: { [id: number]: Product}),
      products.reduce(
        (entities: { [id: number]: Product }, product: Product) => {
          //console.log(entities)
          return {
            ...entities,
            [product.id]: product
          };
        },
        {
          ...state.entities,
        }
      ),
      loaded: true,
      loading: false

    }
  }),
  on(loadProducts, (state) => { return { ...state, loading: true } }),
);
