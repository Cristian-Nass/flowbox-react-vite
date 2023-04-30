import {create} from 'zustand';
import {devtools} from 'zustand/middleware';
import {produce} from 'immer';
import {ProductsType} from '../models/Types';

export interface ProductsStore {
  products: ProductsType[];
  setProducts: (products: ProductsType[]) => void;
  style: string;
  setStyle: (style: string) => void;
}

export const initialState = {
  products: [],
  style: 'grid',
};

export const useStore = create<ProductsStore, any>(
  devtools((set) => ({
    ...initialState,
    setStyle: (style: string) =>
      set(
        produce((state: ProductsStore) => {
          state.style = style;
        }),
        false,
        'set Style'
      ),
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
