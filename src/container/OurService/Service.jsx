import React from 'react'
import { IoIosPeople } from 'react-icons/io';
import { FaHandsHelping } from 'react-icons/fa';
import { RiCustomerService2Fill } from 'react-icons/ri';

import { images } from '../../constants';

import './Service.css';

const Service = () => {
  return (
    <div className='app_service '>
      <h1 className='headtext_cormorant'>Why Qraft Store?</h1>
      
      <div class="app_service-box">
        <div class="services">
          <h1>Community</h1>
          <div class="service-desc">
            <div class="service-icon">
              <FaHandsHelping className='icon'/>
            </div>
            <div class="services-text"><p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores illum repudiandae officia quidem suscipit minima perferendis.</p></div> 
          </div>
          <h1>Network</h1>
          <div class="service-desc">
            <div class="service-icon">
              <IoIosPeople className='icon'/>
            </div>
            <div class="services-text"><p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores illum repudiandae officia quidem suscipit minima perferendis.</p></div>
          </div>
          <h1>24/7 Online support</h1>
          <div class="service-desc">
            <div class="service-icon">
              <RiCustomerService2Fill className='icon'/>
            </div>
            <div class="services-text"><p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores illum repudiandae officia quidem suscipit minima perferendis.</p></div>
          </div>
        </div>
        <div class="service-vid">
          <video video  height="400" controls>
            <source src={images.servicevid} type="video/mp4" />
          </video>
        </div>	
	    </div>
    </div>
  )
}

export default Service