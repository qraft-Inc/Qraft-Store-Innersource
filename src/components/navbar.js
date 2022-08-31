import React,{useState}from 'react'
import {Link} from 'react-router-dom';
import classMobileMenu from classMobileMenu

 function navbar() {
  const[click,setClick]=useState[false];
  const handleClick = ()=> setClick[!click];
   
  return (
  <>
    <nav className='navbar'>
        <div className='navbar-container'>
            <Link to="/" className="navbar-logo">
                TRVL < i className='fab fa-typo3'/>
              </Link>
              <div className='menu-icon'>
                <i className={click ? 'fa fa-times': 'fas fa-bars'} />
                <div>
                  <ul className= {click? 'nav-menu active' : 'nav-menu'}/>
                  <li className='nav-item'>
                    <Link to= '/' className='nav-links' onClick={classMobileMenu}/>
                    Available Gigs
                  </li>
                  <li className='nav-item'>
                    <Link to= '/' className='nav-links' onClick={classMobileMenu}/>
                      Set up a profile
                     </li>
                    </div>
              </div>
        </div>
        {/* <i class="fa fa-bars" aria-hidden="true"></i>
  */}
    </nav>
    </>
      
  )
}
export default navbar