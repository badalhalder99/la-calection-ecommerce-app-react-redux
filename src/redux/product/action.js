import { FETCH_PRODUCT } from './actionType';

export const fetchProduct = (product) => {
  return {
    type: FETCH_PRODUCT,
    payload: product,
  };
};
