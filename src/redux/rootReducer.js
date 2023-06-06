import productsReducer from './products/productsReducer';
import productReducer from './product/productReducer';
import cartReducer from './cart/cartReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  products: productsReducer,
  product: productReducer,
  cart: cartReducer,
});

export default rootReducer;
