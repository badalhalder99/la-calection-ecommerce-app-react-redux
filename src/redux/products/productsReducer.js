import { initialState } from './initialState';
import { FETCH_PRODUCTS } from './actionType';

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_PRODUCTS': {
      return action.payload;
    }
    default:
      return state;
  }
};
export default productsReducer;
