import React from 'react'
import { BsStarFill, BsStarHalf} from 'react-icons/bs';
import { MdLocationPin } from 'react-icons/md';
import { BsCash } from 'react-icons/bs';
import { CarouselWrapper } from 'react-pretty-carousel';

import { images } from '../../constants';

import './Events.css';

const Events = () => {

  
  return (
    <div className='app_event section_padding'>
      <h2 className='app_event-title'>Featured Event</h2>
      <div className='border-line'></div>
      <div className='app_event-container'>
        <CarouselWrapper items={3}>
          <div className='app_event-card'>
            <div className='app_event-img'>
              <h3 className='image-title'>Wedding Photography</h3>
              <img src={images.event1} alt="event" />
            </div>
            <div className='app_event-info'>
              <h3>Elise Kimuli</h3>
              <BsStarFill className='star'/>
              <BsStarFill className='star'/>
              <BsStarFill className='star'/>
              <BsStarHalf className='star-outline'/>
              <p><MdLocationPin/> Mestil &nbsp; <BsCash/> $100</p>
            </div>
          </div>
          <div className='app_event-card'>
            <div className='app_event-img'>
              <h3 className='image-title'>Live band</h3>
              <img src={images.event2} alt="event" />
            </div>
            <div className='app_event-info'>
              <h3>Elise Kimuli</h3>
              <BsStarFill className='star'/>
              <BsStarFill className='star'/>
              <BsStarFill className='star'/>
              <BsStarHalf className='star-outline'/>
              <p><MdLocationPin/> Mestil &nbsp; <BsCash/> $100</p>
            </div>
          </div>
          <div className='app_event-card'>
            <div className='app_event-img'>
              <h3 className='image-title'>Painting</h3>
              <img src={images.event3} alt="event" />
            </div>
            <div className='app_event-info'>
              <h3>Elise Kimuli</h3>
              <BsStarFill className='star'/>
              <BsStarFill className='star'/>
              <BsStarFill className='star'/>
              <BsStarHalf className='star-outline'/>
              <p><MdLocationPin/> Mestil &nbsp; <BsCash/> $100</p>
            </div>
          </div>
          <div className='app_event-card'>
            <div className='app_event-img'>
              <h3 className='image-title'>Wedding Photography</h3>
              <img src={images.event1} alt="event" />
            </div>
            <div className='app_event-info'>
              <h3>Elise Kimuli</h3>
              <BsStarFill className='star'/>
              <BsStarFill className='star'/>
              <BsStarFill className='star'/>
              <BsStarHalf className='star-outline'/>
              <p><MdLocationPin/> Mestil &nbsp; <BsCash/> $100</p>
            </div>
          </div>
          <div className='app_event-card'>
            <div className='app_event-img'>
              <h3 className='image-title'>Live band</h3>
              <img src={images.event2} alt="event" />
            </div>
            <div className='app_event-info'>
              <h3>Elise Kimuli</h3>
              <BsStarFill className='star'/>
              <BsStarFill className='star'/>
              <BsStarFill className='star'/>
              <BsStarHalf className='star-outline'/>
              <p><MdLocationPin/> Mestil &nbsp; <BsCash/> $100</p>
            </div>
          </div>
          <div className='app_event-card'>
            <div className='app_event-img'>
              <h3 className='image-title'>Painting</h3>
              <img src={images.event3} alt="event" />
            </div>
            <div className='app_event-info'>
              <h3>Elise Kimuli</h3>
              <BsStarFill className='star'/>
              <BsStarFill className='star'/>
              <BsStarFill className='star'/>
              <BsStarHalf className='star-outline'/>
              <p><MdLocationPin/> Mestil &nbsp; <BsCash/> $100</p>
            </div>
          </div>
        </CarouselWrapper>
      </div>
    </div>
  )
}

export default Events
