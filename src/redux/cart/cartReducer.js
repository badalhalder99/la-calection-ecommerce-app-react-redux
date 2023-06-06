import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  INCREMENT_QUANTITY,
  DECREMENT_QUANTITY,
} from './actionType';

const initialState = [];

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return [...state, { ...action.payload, quantity: 1 }];
    case REMOVE_FROM_CART:
      return state.filter((product) => product.id !== action.payload.productId);
    case INCREMENT_QUANTITY:
      return state.map((product) =>
        product.id === action.payload.productId
          ? { ...product, quantity: product.quantity + 1 }
          : product
      );
    case DECREMENT_QUANTITY:
      return state.map((product) =>
        product.id === action.payload.productId
          ? {
              ...product,
              quantity: product.quantity > 1 ? product.quantity - 1 : 1,
            }
          : product
      );
    default:
      return state;
  }
};

export default cartReducer;
