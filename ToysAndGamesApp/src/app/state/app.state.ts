import { Product } from '../product-catalog/models/Product';

export interface AppState {
  products: ReadonlyArray<Product>;
  loading: boolean;
}

