import React from 'react';
import { FaQuoteLeft } from 'react-icons/fa';
import { images } from '../../constants';


import './Testimonials.css';

const Testimonials = () => (
  <div className='app_testimonial section_padding'>
    <h2 className='testimonial-title'>What our clients say</h2>
    <div className='border-line'></div>
    <div className='app_testimonial-container'>
      <div className='slider'>
        <div className='slide'>
          <div className='slide-text'>
            <p className="testimonial-text">
              " I needed a musician to perform at a high end event and it was a success, the talent really delivered and it was an absolute blast.  
              Thanks for the talent!"
            </p>
            <FaQuoteLeft className='quote-icon'/>
            <div className="author-text">
              <span className='author-name'>Irene Nankya</span>
              <span className='author-job'>Event planner</span>
            </div>
          </div>
          <div className='slide-img'>
            <img src={images.testimonial1} alt="" />
          </div>
        </div>
        <div className='slide slide-2'>
          <div className='slide-text'>
            <p className="testimonial-text">
              "I needed a musician to perform at a high end event and it was a success. 
              Thanks for the talent!"
            </p>

            <div className="author-text">
              <span className='author-name'>Irene Nankya</span>
              <span className='author-job'>Event planner</span>
            </div>
          </div>
          <div className='slide-img'>
            <img src={images.event1} alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Testimonials;
