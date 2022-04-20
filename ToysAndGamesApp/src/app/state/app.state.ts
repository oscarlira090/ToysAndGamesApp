import { Product } from '../product-catalog/models/Product';

export interface AppState {
  products: ReadonlyArray<Product>;
  entities: { [id: number]: Product },
  loaded: boolean;
  loading: boolean;
}

