import React from 'react'

import { Carousel, Footer, Home, Market, Testimonials } from './container';
import { Navbar } from './components';

import './App.css';

const App = () => {
  return (
    <div>
      <Navbar/>
      <Home/>
      <Market/>
      <Carousel/>
      <Testimonials/>
      <Footer/>
    </div>
  )
}

export default App