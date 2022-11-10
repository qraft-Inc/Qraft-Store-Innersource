import React from 'react'

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Home } from './container';
import { Navbar } from './components';
import Freelancer from './pages/Freelancer/Freelancer';
import Artist from './pages/Artists/Artist';
import Login from './pages/Auth/Login';
import SignUp from './pages/Auth/SignUp';

import './constants/styles/App.css';

const App = () => {
  return (
    <Router>
      <div>
        <Navbar/>
        <Routes>
          <Route path='/' exact element={<Home/>}></Route>
          <Route path='/freelancer' element={<Freelancer/>}></Route>
          <Route path='/artist' element={<Artist/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/sign-up' element={<SignUp/>}></Route>
        </Routes>  
      </div>
    </Router>
  )
}

export default App