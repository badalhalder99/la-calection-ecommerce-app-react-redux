import { FETCH_PRODUCTS } from './actionType';

export const fetchProducts = (products) => {
  return {
    type: FETCH_PRODUCTS,
    payload: products,
  };
};

