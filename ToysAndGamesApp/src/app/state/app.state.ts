import { Product } from '../product-catalog/models/Product';

export interface AppState {
  entities: { [id: number]: Product },
  loaded: boolean;
  loading: boolean;
}

