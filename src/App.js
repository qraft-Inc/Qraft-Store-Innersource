import React from 'react'

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Events, Home, Category, Testimonials, Service } from './container';
import { Navbar, Footer } from './components';
import Freelancer from './pages/Freelancer/Freelancer';
import Artist from './pages/Artists/Artist';

import './constants/styles/App.css';

const App = () => {
  return (
    <Router>
      <div>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/freelancer' element={<Freelancer/>}></Route>
          <Route path='/artist' element={<Artist/>}></Route>
        </Routes>
        <Category/>
        <Service/>
        <Events/>
        <Testimonials/>
        <Footer/>
      </div>
    </Router>
  )
}

export default App