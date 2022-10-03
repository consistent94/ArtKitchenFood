import React from 'react';

import { images } from '../../constants';

const FindUs = () => (
  <div className="app__bg app__wrapper section__padding" id="contact">
    <div className="app__wrapper_info">
      <h1 className="headtext__cormorant" style={{ marginBottom: '3rem' }}>Contact Us</h1>
      <div className="app__wrapper-content">
        <a href='mailto:hello@artfoodkitchen.co.uk' className="p__opensans">hello@artfoodkitchen.co.uk</a>
      </div>
    </div>

    <div className="app__wrapper_img">
      <img src={images.gallery05} style={{ borderRadius: '5%', border: '2px solid' }} alt="finus_img" />
    </div>
  </div>
);

export default FindUs;
