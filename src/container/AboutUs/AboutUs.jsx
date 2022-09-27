import React from 'react';

import './AboutUs.css';

const AboutUs = () => (
  <div className='app__aboutus app__bg flex__center section__padding' id='about'>
    <div className='app__aboutus-content flex__center'>
      <div className='app__aboutus-content_about'>
        <h1 className='headtext__cormorant'>About Us</h1>
        <p className='p__opensans'>We like quality cheese, artisan bread & yummy antipasties. We like our food to look instagrammable, and we like all of these
          things enjoyed with pals, preferably over a glass of wine (or a bottle!)
          This is how ArtFoodKitchen started and now we are lucky enough to have this small,
          woman-owned business where we can create this for you, for any and every
          occasion.</p>
      </div>
    </div>
  </div>
);

export default AboutUs;
