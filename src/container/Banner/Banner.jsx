import React from 'react'
import { Link } from "react-router-dom";

import { images } from '../../constants';
import './Banner.css';

const Banner = () => {
  return (
    <div className='app_header app_wrapper section_padding' id='Home'>
    <div className='app_wrapper-info'>
      <h1>From The Experts to You </h1>
      <p className='p_opensans'>Qraft Store is a market place that connects independent artists to people or business with gigs.</p>
      <button className='custom_button'><Link to='/login'>Upload Gigs</Link></button>
    </div>

    <div className='app_wrapper-img'>
      <img src={images.homeimg2} alt='homepage' />
    </div>
  </div>
  )
}

export default Banner