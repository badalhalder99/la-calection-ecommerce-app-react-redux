import { fetchProducts } from '../action';

const fetchProductsFromApi = () => {
  return async (dispatch, getState) => {
    try {
      const response = await fetch('https://fakestoreapi.com/products');
      const products = await response.json();
      dispatch(fetchProducts(products));
    } catch (error) {
      console.log('Error fetching products:', error.message);
    }
  };
};

export default fetchProductsFromApi;

