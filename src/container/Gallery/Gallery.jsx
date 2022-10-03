import React from 'react';
import { useRef } from 'react'

import { BsArrowLeftShort, BsArrowRightShort} from 'react-icons/bs'

import { images } from '../../constants'
import './Gallery.css';

const Gallery = () => {
  const scrollRef = useRef(null)
  const gallery = [images.galeria1, images.galeria2, images.galeria3, images.galeria4, images.galeria5, images.galeria6]

  const url = 'https://www.instagram.com/artfoodkitchen/'

  const scroll = (direction) => {
    const { current } = scrollRef;

    if (direction === 'left') {
      current.scrollLeft -= 300;
    } else {
      current.scrollLeft += 300;
    }
  };

  return (
      <div className='app__gallery flex__center'>
        <div className='app__gallery-content'>
          <h1 className='headtext__cormorant'>Gallery</h1>
          <p className='p__opensans' style={{ marginTop: '2rem' }}>• Signature and Handcrafted Grazing Platters <br /> • Bespoke Grazing Displays </p>
          <a href={url}>
            <button type='button' className='custom__button' >View More</button>
          </a>
        </div>
        
        <div className='app__gallery-images'>
          <div className="app__gallery-images_container" ref={scrollRef}>
            {gallery.map((image, index) => (
              <div className="app__gallery-images_card flex__center" key={`gallery_image-${index + 1}`}>
                <img src={image} alt="gallery_image" />
              </div>
            ))}
          </div>

          <div className="app__gallery-images_arrows">
            <BsArrowLeftShort className="gallery__arrow-icon" onClick={() => scroll('left')} />
            <BsArrowRightShort className="gallery__arrow-icon" onClick={() => scroll('right')} />
          </div>

        </div>
      </div>
    );
};
export default Gallery;
