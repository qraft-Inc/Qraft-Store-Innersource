import React from 'react';
import { images } from '../../constants';



const Freelancer = () => (
  <div className='app_header app_wrapper section_padding' id='Home'>
    <div className='app_wrapper-info'>
      <h1>From The Experts to You </h1>
      <p className='p_opensans'>Qraft Store is a market place that connects independent artists to people or business with gigs.</p>
      <button className='custom_button'>Upload Gigs</button>
    </div>

    <div className='app_wrapper-img'>
      <img src={images.homeimg1} alt='homepage' />
    </div>
  </div>
)

export default Freelancer;
