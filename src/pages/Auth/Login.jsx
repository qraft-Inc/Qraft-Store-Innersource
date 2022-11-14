import React from 'react'
import {useRef, useState, useEffect, useContext} from 'react'
import { FaEnvelope, FaLock } from 'react-icons/fa';
import JwtDecode from 'jwt-decode'
import api from '../../utils/api'

import { Link, useNavigate } from "react-router-dom";

import { images } from '../../constants';
import './Auth.css';

const Login = () => {
  const navigate = useNavigate();
  const emailRef = useRef();
  const errRef = useRef();

  const [email, setEmail] = useState('');
  const [pwd, setPwd] = useState('');
  const [errMsg, setErrMsg] = useState('');
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    setErrMsg('');
  }, [email, pwd])

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(email, pwd);
    setEmail('');
    setPwd('');
    setSuccess(true);


    ///////start//////////
    api.post('/api/auth/login',{
      "email": email,
      "password": pwd
    })
    .then(function (response) {

      console.log(response.data);
      const decodedInfo = JwtDecode(response.data.token)
      console.log(decodedInfo)
      if(decodedInfo.Role ==="artist"){
        navigate('/freelancer')
      }else if(decodedInfo.Role ==="client"){
        navigate('/artist')
      }else{
        alert("admin")
      }


    })
    .catch(function (error) {
      console.log(error);
    })

  }




  return (
    <>
      {success ? (
        <section>
          <h1>You are logged in!</h1>
          <br />
          <p>
            <a href="#">Go to Home</a>
          </p>
        </section>
      ) : (
    <div className='app_logIn section_padding'>
      <div className='app_login-container'>
      <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
        <div className='app_login-cover'>
          <div className='front'>
            <img src={images.loginimg2} alt="login"/>
            <div className='text'>
              <span className='text-1'>One of us?</span>
              <span className='text-2'>If you already have an account, login and let's stay connected.</span>
            </div>
          </div>
        </div>
        <form onSubmit={handleSubmit}>
          <div className='form-content'>
            <div className='app_login-form'>
              <div className='login-title'>Login</div>
              <div className='input_box-container'>
                <div className='input-box'>
                  <FaEnvelope className='input-icon'/>
                  <input 
                    type="email" 
                    placeholder="Enter your email" 
                    ref={emailRef}
                    autoComplete="off"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                  required/>
                </div>
                <div className='input-box'>
                  <FaLock className='input-icon'/>
                  <input 
                    type="password" 
                    placeholder="Enter your password" 
                    onChange={(e) => setPwd(e.target.value)}
                    value={pwd}
                  required/>
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
    )}
    </>
  )
}

export default Login