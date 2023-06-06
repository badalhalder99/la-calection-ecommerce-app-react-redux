import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import fetchProductsFromApi from '../redux/products/thunk/fetchProducts';
import LatestProduct from './LatestProduct';

const Products = () => {
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();
  const [selectedCategory, setSelectedCategory] = useState('all');

  useEffect(() => {
    dispatch(fetchProductsFromApi());
  }, [dispatch]);

  const filterProducts = (category) => {
    setSelectedCategory(category.toLowerCase());
  };

  // Filter products based on the selected category
  const filteredProducts =
    selectedCategory === 'all'
      ? products
      : products.filter((product) => product.category === selectedCategory);

  return (
    <div className="container my-4 py-4">
      <LatestProduct />
      <div className="row">
        <div className="col-md-12 text-center">
          <div className="btn-wrap animate__animated animate__fadeInUp">
            <button
              className="btn btn-outline-dark me-2 my-2 btn-filter"
              onClick={() => filterProducts('All')}
            >
              All
            </button>
            <button
              className="btn btn-outline-dark me-2 my-2 btn-filter"
              onClick={() => filterProducts("Men's Clothing")}
            >
              Men's Clothing
            </button>
            <button
              className="btn btn-outline-dark me-2 my-2 btn-filter"
              onClick={() => filterProducts("Women's Clothing")}
            >
              Women's Clothing
            </button>
            <button
              className="btn btn-outline-dark me-2 my-2 btn-filter"
              onClick={() => filterProducts('Jewelery')}
            >
              Jewelery
            </button>
            <button
              className="btn btn-outline-dark me-2 my-2 btn-filter"
              onClick={() => filterProducts('Electronics')}
            >
              Electronics
            </button>
          </div>
        </div>
      </div>
      <div className="row">
        {filteredProducts.map((product) => (
          <div
            className="col-lg-3 col-md-4 col-sm-6 card-wrap"
            key={product.id}
          >
            <div className="card h-100 text-center">
              <img
                src={product.image}
                className="card-img-top"
                alt="product image"
                height="250px"
              />
              <div className="card-body">
                <h5 className="card-title">{product.title.slice(0, 16)}</h5>
                <p className="card-text fw-bold">{product.price}</p>
                <NavLink
                  to={`/products/${product.id}`}
                  className="btn btn-primary"
                >
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

export default Products;
