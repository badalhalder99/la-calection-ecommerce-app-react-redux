import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  INCREMENT_QUANTITY,
  DECREMENT_QUANTITY,
} from './actionType';

export const addToCart = (product) => {
  return {
    type: ADD_TO_CART,
    payload: product,
  };
};

export const removeFromCart = (productId) => {
  return {
    type: REMOVE_FROM_CART,
    payload: {
      productId: productId,
    },
  };
};

export const incrementQuantity = (productId) => {
  return {
    type: INCREMENT_QUANTITY,
    payload: {
      productId: productId,
    },
  };
};

export const decrementQuantity = (productId) => {
  return {
    type: DECREMENT_QUANTITY,
    payload: {
      productId: productId,
    },
  };
};
