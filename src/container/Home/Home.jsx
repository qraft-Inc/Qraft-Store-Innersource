import React from 'react';

import Banner from '../Banner/Banner';
import Category from '../Category/Category';
import Events from '../FeaturedEvent/Events';
import Service from '../OurService/Service';
import Testimonials from '../Testimonials/Testimonials';
import { Footer } from '../../components';

const Home = () => (
  <div>
    <Banner/>
    <Category/>
    <Events/>
    <Service/>
    <Testimonials/>
    <Footer/>
  </div>
)

export default Home;
