import React from 'react'
import {Link} from "react-router-dom"
// import Services from '../Home/Services'
import "./Navbar.css"

function Navbar() {
  
  return (
    <nav>
        <div className='NavBar-container'>
            <div className='Navbar-menu-container'>
                {/* <div className='Happy-life-heading-container'>
                    <h1 className='Happy-life-heading'> <span className="happy">Happy</span><span className='life'>Life</span></h1>
                </div> */}
                <div className='Navigation-menu-container'>
                  {/* <span className='Navbar-menu' >Services</span>
                  <span className='Navbar-menu' id='free-listing'>Free Listing</span> */}
                {/* <Link to="/login" className='Nav-login-link'><span className='Navbar-menu-login'>Login</span></Link>
                
                <Link to="/registration" className='Nav-signup-link'><span className='Navbar-menu-signup'>Sign up</span></Link> */}
                </div>
            </div>
        </div>
    </nav>
  )
}

export default Navbar