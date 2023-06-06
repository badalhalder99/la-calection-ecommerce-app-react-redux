import React from 'react';

const Slider = () => {
  return (
    <div className="slider">
      <div>
        <img
          src="https://i.ibb.co/0mnV5pR/ecommerce.jpg"
          className="d-block w-100 img-fluid animate__animated animate__fadeIn"
          alt="Slider Image"
        />
      </div>
      <div className="caption">
        <h2 className='animate__animated animate__fadeInLeftBig'>NEW SEASON ARRIVALS</h2>
        <p className='animate__animated animate__fadeInLeftBig'>CHECK OUT ALL THE TREANDS</p>
      </div>
    </div>
  );
};

export default Slider;
