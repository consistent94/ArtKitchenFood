import React, {useState} from 'react';

import {GiHamburgerMenu} from 'react-icons/gi';
import {MdOutlineRestaurantMenu} from 'react-icons/md';

import images from '../../constants/images'
import './Navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false)

  return (
    <nav className='app__navbar'>
        <img className='app__navbar-logo' src={images.logo} alt='app logo'/>
        <ul className='app__navbar-links'>
          <li className='p__opensans'><a href='#home'>Home</a></li>
          <li className='p__opensans'><a href='#about'>About</a></li>
          <li className='p__opensans'><a href='#menu'>Menu</a></li>
          <li className='p__opensans'><a href='#contact'>Contact</a></li>
          {/* <li className='p__opensans'><a href='#info'>Info</a></li> */}
        </ul>

        <div className='app__navbar-smallscreen'>
          <GiHamburgerMenu fontSize={27} color='black' onClick={() => setToggleMenu(true)} />
  
          {toggleMenu && (
          <div className='app__navbar-smallscreen_overlay flex__center slide-bottom'>
            <MdOutlineRestaurantMenu className='overlay__close' fontSize={27} onClick={() => setToggleMenu(false)} />
            <ul className='app__navbar-smallscreen_links'>
              <li className='p__opensans'><a href='#home'>Home</a></li>
              <li className='p__opensans'><a href='#about'>About</a></li>
              <li className='p__opensans'><a href='#menu'>Menu</a></li>
              <li className='p__opensans'><a href='#contact'>Contact</a></li>
              {/* <li className='p__opensans'><a href='#info'>Info</a></li> */}
            </ul>
          </div>
          )}
        </div>
    </nav>
  );
}

export default Navbar;
