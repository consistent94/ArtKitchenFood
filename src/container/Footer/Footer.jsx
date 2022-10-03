import React from 'react';
import { FiFacebook, FiInstagram } from 'react-icons/fi';

import { FooterOverlay, Newsletter } from '../../components';
import { images } from '../../constants';
import './Footer.css';

const Footer = () => (
  <div className="app__footer section__padding" id="login">
    <FooterOverlay />
    <Newsletter />

    <div className="app__footer-links">

      <div className="app__footer-links_logo">
        <img src={images.logo} alt="footer_logo" />
        <p className="p__opensans">&quot;Ready to book your grazing table? Want us to cater your event? Have a custom platter request? Need beautiful PR?&quot;</p>
        <div className="app__footer-links_icons">
          <a href='https://www.facebook.com/people/ArtFood-Kitchen-Derbyshire/100076276759809/'><FiFacebook /></a>
          <a href='https://www.instagram.com/artfoodkitchen/'><FiInstagram /></a>
        </div>
      </div>
    </div>

    <img src={images.cert} className='app__cert' alt='certificate' />

    <div className="footer__copyright">
      <p className="p__opensans">2022 ArtKitchenFood. All Rights reserved.</p>
    </div>

  </div>
);

export default Footer;