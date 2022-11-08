import React from 'react'
import { FaUser, FaEnvelope, FaLock } from 'react-icons/fa';
import { GiPadlock } from 'react-icons/gi';
import { images } from '../../constants';

import './Login.css';

const Login = () => {

  return (
    <div className='app_login section_padding'>
      <div className='app_login-container'>
      <input type="checkbox" id="flip"/>
        <div className='app_login-cover'>
          <div className='front'>
            <img src={images.loginimg1} alt="login image"/>
            <div className='text'>
              <span className='text-1'>New here?</span>
              <span className='text-2'>SignIn and discover great amount of opportunities.</span>
            </div>
          </div>
          <div className='back'>
            <img src={images.loginimg2} className='back-img' alt="login image" />
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
                <div class="order-text login-text">Don't have an account? <label for="flip">SignUp now</label></div>
              </div>
            </div>
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
                  <GiPadlock className='input-icon'/>
                  <input type="password" placeholder="Enter your password" required/>
                </div>
                <div className='button input-box'>
                  <input type="submit" value='Submit' />
                </div>
                <div class="order-text sign-up-text">Already have an account? <label for="flip">Login now</label></div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login