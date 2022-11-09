import React from 'react'
import { FaUser, FaEnvelope, FaLock } from 'react-icons/fa';

import { Link } from "react-router-dom";

import { images } from '../../constants';
import './Auth.css';

const SignUp = () => {
  return (
    <div className='app_logIn section_padding'>
      <div className='app_login-container'>
        <div className='app_login-cover'>
          <div className='back'>
            <img src={images.loginimg1} alt="login" />
            <div className='text'>
                <span className='text-1'>New here?</span>
                <span className='text-2'>SignUp and discover great amount of opportunities.</span>
            </div>
          </div>
        </div>
        <form action="#">
          <div className='form-content'>
            <div className='app_signUp-form'>
              <div className='login-title'>Sign Up</div>
              <div className='input_box-container'>
                <div className='input-box'>
                  <FaUser className='input-icon'/>
                  <input type="text" placeholder="Enter your full name" required/>
                </div>
                <div className='input-box'>
                  <FaEnvelope className='input-icon'/>
                  <input type="email" placeholder="Enter your email" required/>
                </div>
                <div className='input-box'>
                  <FaLock className='input-icon'/>
                  <input type="password" placeholder="Enter your password" required/>
                </div>
                <div className='button input-box'>
                  <input type="submit" value='Submit' />
                </div>
                <div class="order-text sign-up-text">Already have an account? <Link to='/login' className='label'>Login now</Link></div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default SignUp