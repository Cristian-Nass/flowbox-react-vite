import {create} from 'zustand';
import {devtools} from 'zustand/middleware';
import {produce} from 'immer';
import {ProductsType} from '../models/Types';

export interface ProductsStore {
  products: ProductsType[];
  setProducts: (products: ProductsType[]) => void;
}

export const initialState = {
  products: [],
};

export const useStore = create<ProductsStore, any>(
  devtools((set) => ({
    ...initialState,
    setProducts: (products: ProductsType[]) =>
      set(
        produce((state: ProductsStore) => {
          state.products = products;
        }),
        false,
        'Set product'
      ),
  }))
);
