import React from 'react'
import { FaEnvelope, FaLock } from 'react-icons/fa';

import { Link } from "react-router-dom";

import { images } from '../../constants';
import './Auth.css';

const Login = () => {

  return (
    <div className='app_logIn section_padding'>
      <div className='app_login-container'>
        <div className='app_login-cover'>
          <div className='front'>
            <img src={images.loginimg2} alt="login"/>
            <div className='text'>
              <span className='text-1'>One of us?</span>
              <span className='text-2'>If you already have an account, login and let's stay connected.</span>
            </div>
          </div>
        </div>
        <form action="#">
          <div className='form-content'>
            <div className='app_login-form'>
              <div className='login-title'>Login</div>
              <div className='input_box-container'>
                <div className='input-box'>
                  <FaEnvelope className='input-icon'/>
                  <input type="email" placeholder="Enter your email" required/>
                </div>
                <div className='input-box'>
                  <FaLock className='input-icon'/>
                  <input type="password" placeholder="Enter your password" required/>
                </div>
                <div className='forgot-pass'><a href="#">Forgot password?</a></div>
                <div className='button input-box'>
                  <input type="submit" value='Submit' />
                </div>
                <div class="order-text login-text">Don't have an account? <Link to='/sign-up' className='label'>SignUp now</Link></div>
              </div>
            </div>
            
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login