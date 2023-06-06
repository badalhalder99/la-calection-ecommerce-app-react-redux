import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  removeFromCart,
  incrementQuantity,
  decrementQuantity,
} from '../redux/cart/action';

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleRemoveFromCart = (productId) => {
    dispatch(removeFromCart(productId));
  };

  const handleIncrementQuantity = (productId) => {
    dispatch(incrementQuantity(productId));
  };

  const handleDecrementQuantity = (productId) => {
    dispatch(decrementQuantity(productId));
  };

  const calculateSubtotal = () => {
    let subtotal = 0;
    cart.forEach((product) => {
      subtotal += product.price * product.quantity;
    });
    return subtotal.toFixed(5);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-7">
          {cart.map((singleProduct) => (
            <div className="cart-wrap" key={singleProduct.id}>
              <div className="cart-img">
                <img src={singleProduct.image} alt={singleProduct.title}/>
              </div>
              <div className="cart-title">
                <p className="cart-p">{singleProduct.title.slice(0, 15)}</p>
                <p className="cart-p">Price: {singleProduct.price}</p>
              </div>
              <div className="cart-actions">
                
                <button onClick={() => handleIncrementQuantity(singleProduct.id)} className='btn btn-outline-dark increment-btn'>+</button>
                <span>{singleProduct.quantity}</span>
                <button onClick={() => handleDecrementQuantity(singleProduct.id)} className='btn btn-outline-dark decrement-btn'>-</button>
                <button onClick={() => handleRemoveFromCart(singleProduct.id)} className='btn btn-outline-dark remove-btn'>Remove</button>
              </div>
            </div>
          ))}
        </div>
        <div className="col-md-5">
          <div className="cart-summary">
            <h3>Cart Summary</h3>
            <h5>Total Products: {cart.length}</h5>
            <p>Subtotal: {calculateSubtotal()}</p>
            <button className='btn btn-secondary'>Proceed To Checkout</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
