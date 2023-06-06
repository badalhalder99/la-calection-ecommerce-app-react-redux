import { fetchProduct } from '../action';

const fetchProductFromApi = (id) => {
  return async (dispatch) => {
    try {
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      const product = await response.json();
      dispatch(fetchProduct(product));
    } catch (error) {
      console.log('Error fetching product:', error.message);
    }
  };
};

export default fetchProductFromApi;

