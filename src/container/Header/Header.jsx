import React from 'react';

import {images} from '../../constants';
import './Header.css';

const Header = () => (
  <div className='app__header app__wrapper section__padding' id='home'>
    <div className='.app__wrapper_info'>
      <h1 className='app__header-h1'>AN ENDLESS APPETITE TO FEED PEOPLE</h1>
      <p className='p__opensans'>ArtFoodKitchen brings sophisticated, bold and creative solutions to the catering industry.</p>
      <button type='button' className='custom__button' href='#menu'>Menu</button>
    </div>
    <div className='app__wrapper_img'>
      <img src={images.gallery02} alt='header_img' />
    </div>
  </div>
);

export default Header;
