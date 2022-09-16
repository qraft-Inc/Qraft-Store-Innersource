
import React from "react";
import { Musician } from './components/ApplicationForm/Musician';
import { Painter } from './components/ApplicationForm/Painter';
import { Photographer } from './components/ApplicationForm/Photographer';

import './components/style.css';


import { Events, Home, Category, Testimonials, Service } from './container';
import { Navbar } from './components';

import './App.css';


const App = () => {
  return (

    <div className="App">
      <Photographer/>

      <Navbar/>
      <Home/>
      <Category/>
      <Service/>
      <Events/>

    </div>
  )
}

export default App