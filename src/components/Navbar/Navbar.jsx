import React, { useState } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi';
import { FiShoppingCart } from 'react-icons/fi';
import { AiOutlineSearch } from 'react-icons/ai';
import { MdOutlineClose } from 'react-icons/md'

import './Navbar.css'

const Navbar = () => {
 
const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav className='app_navbar'>
        <div className='app_navbar-logo'>
            <h1>Qraft <br/> <span className='store'>Store</span></h1>
        </div>
        <div className='app_search-box'>
            <form action=''>
                <input type='text' name='search' placeholder='search'></input>
                <button type='submit'><AiOutlineSearch/></button>
            </form>
        </div>
        <ul className='app_navbar-links'>
            <li className="p_opensans"><a href="#home" className='active'>Home</a></li>
            <li className="p_opensans"><a href="#artists">Featured artists</a></li>
            <li className="p_opensans"><a href="#freelancer">Become freelancer</a></li>
        </ul>
        <div className="app_navbar-right">
            <FiShoppingCart className='cart'/>
            <a href="#login" className="p_opensans app_sign">Sign Up </a>
            <a href="#login" className="p_opensans app_login">Login </a>
        </div>
        <div className="app_navbar-smallscreen">
            <GiHamburgerMenu className='nav_menu' color="#fff" fontSize={26} onClick={() => setToggleMenu(true)}/>
        
            {toggleMenu && (
                <div className="app_navbar-smallscreen_overlay flex__enter slide-bottom">
                    <MdOutlineClose fontSize={26} className="overlay_close" onClick={() => setToggleMenu(false)}/>
                    <ul className="app_navbar-smallscreen_links">
                        <li className="p_opensans"><a href="#home" className='active'>Home</a></li>
                        <li className="p_opensans"><a href="#artists">Featured artists</a></li>
                        <li className="p_opensans"><a href="#freelancer">Become freelancer</a></li>
                </ul>
                </div>
            )}
        </div>
    </nav>
  )
}

export default Navbar