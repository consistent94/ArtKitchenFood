import React from 'react';

import './Newsletter.css';

const Newsletter = () => {
  
  function handleClick() {
    alert('You have succesfully subscribed to our newsletter.')
  }

  return (
    <div className="app__newsletter">
      <div className="app__newsletter-heading">
        <h1 className="headtext__cormorant">Subscribe To Our Newsletter</h1>
        <p className="p__opensans">Sign up for presents and updates (we promise to send only cool stuff)</p>
      </div>
      <div className="app__newsletter-input flex__center">
        <input type="email" placeholder="Enter your email address" />
        <button onClick={handleClick} type="button" className="custom__button">Subscribe</button>
      </div>
    </div>
)};

export default Newsletter;