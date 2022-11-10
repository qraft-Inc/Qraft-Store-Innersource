import React, { useState } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi';
import { FiShoppingCart } from 'react-icons/fi';
import { AiOutlineSearch } from 'react-icons/ai';
import { MdOutlineClose } from 'react-icons/md';

import { Link } from "react-router-dom";


import { images } from '../../constants'
import './Navbar.css'

const Navbar = () => {
 
const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav className='app_navbar'>
        <div className='app_navbar-logo'>
           <img src={images.logo} alt='homepage' className='qraft-logo' />
        </div>
        <div className='app_search-box'>
            <form action=''>
                <input type='text' name='search' placeholder='search'></input>
                <button type='submit'><AiOutlineSearch/></button>
            </form>
        </div>
        <ul className='app_navbar-links'>
            <li className='p_opensans'><Link to='/' className='active'>Home</Link></li>
            <li className='p_opensans'><Link to='/artist'>Featured artists</Link></li>
            <li className='p_opensans'><Link to='/freelancer'>Become freelancer</Link></li>
        </ul>
        <div className='app_navbar-right'>
            <FiShoppingCart className='cart'/>
            <a href='#login' className='p_opensans app_sign'><Link to='/sign-up'>Sign Up </Link></a>
            <a href='#login' className='p_opensans app_login'><Link to='/login'>Login </Link></a>
        </div>
        <div className='app_navbar-smallscreen'>
            <GiHamburgerMenu className='nav_menu' color="#fff" fontSize={26} onClick={() => setToggleMenu(true)}/>
        
            {toggleMenu && (
                <div className='app_navbar-smallscreen_overlay flex_center slide-bottom'>
                    <MdOutlineClose fontSize={26} className='overlay_close' onClick={() => setToggleMenu(false)}/>
                    <ul className='app_navbar-smallscreen_links'>
                        <li className='p_opensans'><a href='#home' className='active'>Home</a></li>
                        <li className='p_opensans'><a href='#artists'>Featured artists</a></li>
                        <li className='p_opensans'><a href='#freelancer'>Become freelancer</a></li>
                    </ul>
                </div>
            )}
        </div>
    </nav>
  )
}

export default Navbar