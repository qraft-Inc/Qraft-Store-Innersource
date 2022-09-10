import React from 'react';
import './Market.css';
import { images } from '../../constants';


const Market = () => (
  
  <div className='market-section'>
   <div className='Heading'>
    <h1>Qraft Market Place Makes it easy For you to Get Artists for your Choice.</h1>
    <p>We have a variety of gigs including; Music,Poetry, Photography and <br></br>Painting </p>
   </div>

   <div className='card-container'>

     <div className='cards'>
      <div className='card-image'>
         <img src={images.homeimg3} alt=""  height="160px"  width="260px"/>
      </div>
      <div className='Genre'> 
         <h2>Reggea Perfomer</h2>
      </div>
      <div className='card-section'>
         <p>Mestil</p>
         <span>$200</span>
      </div>
         <button type='button'>Apply </button>
     </div>

     <div className='cards'>
      <div className='card-image'>
         <img src={images.homeimg3} alt=""  height="160px" width="260px"/>
      </div>
      <div className='Genre'> 
         <h2>Reggea Perfomer</h2>
      </div>
      <div className='card-section'>
         <p>Mestil</p>
         <span>$200</span>
      </div>
         <button type='button'>Apply </button>
     </div>

     <div className='cards'>
      <div className='card-image'>
         <img src={images.homeimg3} alt=""  height="160px" width="260px"/>
      </div>
      <div className='Genre'> 
         <h2>Reggea Perfomer</h2>
      </div>
      <div className='card-section'>
         <p>Mestil</p>
         <span>$200</span>
      </div>
         <button type='button'>Apply </button>
     </div>

     <div className='cards'>
      <div className='card-image'>
         <img src={images.homeimg3} alt=""  height="160px"  width="260px"/>
      </div>
      <div className='Genre'> 
         <h2>Reggea Perfomer</h2>
      </div>
      <div className='card-section'>
         <p>Mestil</p>
         <span>$200</span>
      </div>
         <button type='button'>Apply </button>
     </div> 
   </div>
   <h1>Most Hired Artists of the year</h1>
  </div>
);

export default Market;
