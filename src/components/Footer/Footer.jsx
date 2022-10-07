import React from 'react';
import { FaFacebook, FaTwitter, FaYoutube, FaInstagram } from 'react-icons/fa';


import './Footer.css';

const Footer = () => (
  <div className='app_footer '>
    <div className='app_footer-newsletter'>
      <h2>Subscribe Newsletter to get 10% off on all our offers.</h2>
      <form action="?">
        <input type="email" placeholder='Enter your email' />
        <button type='submit'>Submit</button>
      </form>
      <ul className='social-icons'>
        <li>
          <a href="/#">
            <FaFacebook/>
          </a>
        </li>
        <li>
          <a href="/#">
            <FaInstagram/>
          </a>
        </li>
        <li>
          <a href="/#">
            <FaYoutube/>
          </a>
        </li>
        <li>
          <a href="/#">
            <FaTwitter/>
          </a>
        </li>
      </ul>
    </div>
    <hr/>
    <div className='app_footer-main'>
      <h1 className='footer-logo'>Qraft <br/> <span className='store'>Store</span></h1>
      <div className='links'>
        <h6>Explore</h6>
        <ul>
          <li>
            <a href="/#">Artists</a>
          </li>
          <li>
            <a href="/#">Clients</a>
          </li>
        </ul>
      </div>
      <div className='links'>
        <h6>Information</h6>
        <ul>
          <li>
            <a href="/#">Terms & Conditions</a>
          </li>
          <li>
            <a href="/#">Privacy Policy</a>
          </li>
        </ul>
      </div>
      <div className='links'>
        <h6>Location</h6>
        <p>Kampala</p>
        <p>Entebbe</p>
      </div>
      
      <div className='links'>
        <h6>Contact</h6>
        <p>qraftacademy@gmail.com</p>
        <p>+256 123456789</p>
      </div>
    </div>
    <hr/>
    <div >
      <p className='lower-footer'>&copy; Copyright 2022 - Qraft Acaademy</p>
    </div>
  </div>
  
);

export default Footer;
