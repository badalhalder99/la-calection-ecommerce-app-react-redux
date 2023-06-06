import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import fetchProductFromApi from '../redux/product/thunk/fetchProduct';
import { addToCart } from '../redux/cart/action';

const Product = () => {
  const product = useSelector((state) => state.product);
  const products = useSelector((state) => state.products);
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const { id } = useParams();
  const [isAddedToCart, setIsAddedToCart] = useState(false);

  useEffect(() => {
    dispatch(fetchProductFromApi(id));
  }, [dispatch, id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  const relatedProducts = products.filter(
    (p) => p.category === product.category && p.id !== product.id
  );

  const handleCart = (singleProduct) => {
    dispatch(addToCart(singleProduct));
    setIsAddedToCart(true);
  };
  //this function for handing add to cart button for disable after the product add to the cart
  const isProductInCart = cart.some((item) => item.id === product.id);

  return (
    <div className="container my-5 py-3">
      <div className="row">
        <div className="col-md-6">
          <img
            src={product.image}
            alt={product.title}
            className="single-img img-fluid"
          />
        </div>
        <div className="col-md-6">
          <h1 className="product-name">{product.title}</h1>
          <hr />
          <h2 className="my-4">{product.price}</h2>
          <p className="lead">{product.description}</p>
          <button
            className="btn btn-outline-primary my-2"
            onClick={() => handleCart(product)}
            disabled={isProductInCart}
          >
            {isProductInCart ? 'Added to Cart' : 'Add to Cart'}
          </button>
        </div>
      </div>

      <div className="row">
        <div className="col-md-12">
          <h2 className="fw-bold related-product">Related Products</h2>
        </div>
      </div>
      <div className="row">
        {relatedProducts.map((p) => (
          <div className="col-lg-3 col-md-4 col-sm-6 card-wrap" key={p.id}>
            <div className="card h-100 text-center">
              <img
                src={p.image}
                className="card-img-top"
                alt="product image"
                height="250px"
              />
              <div className="card-body">
                <h5 className="card-title">{p.title.slice(0, 16)}</h5>
                <p className="card-text fw-bold">{p.price}</p>
                <NavLink to={`/products/${p.id}`} className="btn btn-primary">
                  Buy Now
                </NavLink>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;
