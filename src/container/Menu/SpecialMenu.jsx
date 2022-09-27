import React from 'react';

import { images, data } from '../../constants'
import { MenuItem } from '../../components'
import './SpecialMenu.css';

const SpecialMenu = () => (
  <div>
    <div className='app__specialMenu section__padding flex__center' id='menu'>
      <div className='app__specialMenu-title'>
        <h1 className='headtext__cormorant'>Menu</h1>
      </div>

      <div className='app__specialMenu-menu'>
        <div className='app__specialMenu-menu_platters flex__center'>
          <p className='app__specialMenu_menu_heading'>Platters</p>
          <div className='app__specialMenu_menu_items'>
            {data.platters.map((platter, index) => (
              <MenuItem key={platter.title + index} title={platter.title} price={platter.price} tags={platter.tags} />
            ))}
          </div>
        </div>
        
        <div className='app__specialMenu-menu-img'>
          <img src={images.knife} alt='menu img' />
        </div>
        
        <div className='app__specialMenu-menu_boxes flex__center'>
          <p className='app__specialMenu_menu_heading'>Boxes</p>
          <div className='app__specialMenu_menu_items'>
            {data.boxes.map((box, index) => (
              <MenuItem key={box.title + index} title={box.title} price={box.price} tags={box.tags} />
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default SpecialMenu;
