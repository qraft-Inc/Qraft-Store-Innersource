import React from 'react'

import { Events, Home, Category, Testimonials, Service } from './container';
import { Navbar, Footer } from './components';

import './App.css';

const App = () => {
  return (
    <div>
      <Navbar/>
      <Home/>
      <Category/>
      <Service/>
      <Events/>
      <Testimonials/>
      <Footer/>
    </div>
  )
}

export default App