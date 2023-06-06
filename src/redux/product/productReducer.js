import { initialState } from './initialState';
import { FETCH_PRODUCT } from './actionType';

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_PRODUCT': {
      return action.payload;
    }
    default:
      return state;
  }
};
export default productsReducer;
