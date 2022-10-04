import  React from 'react';
import logo from './logo.svg';
import  LinkedInIcon from '@mui/icons-material/LinkedIn';
import GoogleIcon from '@mui/icons-material/Google';
import TwitterIcon from '@mui/icons-material/Twitter';
import { useState } from 'react';
import axios from "axios"; 
import { Password } from '@mui/icons-material';
const qraft= new URL('./images/qraft.png',import.meta.url);

export default function Form(){

    const handleSubmit=(e) => {
        e.preventDefault();
        const user = {
          name: this.state.name
          
          
        }
        axios.post('api/auth/register', { user })
          .then(res=>{
            console.log(res);
            console.log(res.data);
            window.location = "/retrieve" //This line of code will redirect you once the submission is succeed
          })
      }
      const handleChange=(e) =>{
        this.setState({ name: e.target.value});
        
      }



// render() {
    return(
        <section>
            <div className="register">
            <div className="col-1">
                <h1>Create an account</h1>
                <div className="bord">
                <span>WELCOME TO</span>
                <img src={qraft} className="qraftlogo"/>
                <span>Sign up to get your favourite gig</span>
                <form id="form" className="flex flex-col">
                    <input type="text" placeholder='username'/>
                    <input type="text" placeholder='email'/>
                    <input type="password" placeholder='password'/>
                    <input type="password" placeholder='confirm password'/>
                    <button className='btn'>Sign in</button>
                  {/* <HorizontalRule className ="line"/>or sign up with
                  <HorizontalRule className ="line"/> */}
                  <p>______ or sign up with _____</p>
                  <div className ="icons">
                  <LinkedInIcon/>
                  <GoogleIcon/>
                  <TwitterIcon/>
                  </div>
                </form> 
                </div>
            </div>
            <div className="col-2">
            <p>Qraft Store is a marketplace platform that connects independent artists to people or bussines with gigs.</p>
            <h4>Qraft Market Place</h4>
            <span>From Experts</span>
            </div>
            </div>
        </section>
    )
// }
}