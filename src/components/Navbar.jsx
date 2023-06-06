import React from 'react';
import { FaShoppingCart, FaBars } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

const Navbar = () => {
  const cart = useSelector((state) => state.cart);
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-body-tertiary">
      <div className="container">
        <NavLink className="navbar-brand" to="/">
          LA COLLECTION
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span>
            <FaBars />
          </span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link" to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/products">
                Products
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/about">
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/contact">
                Contact
              </NavLink>
            </li>
          </ul>
          <div className="button-wrap">
            <NavLink to="/login" className="btn btn-outline-dark">
              Login
            </NavLink>
            <NavLink to="/register" className="btn btn-outline-dark ms-2">
              Register
            </NavLink>
            <NavLink to="/cart" className="btn btn-outline-dark ms-2">
              <FaShoppingCart /> {cart.length}
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
