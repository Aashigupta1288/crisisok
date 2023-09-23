import React from 'react'
import { NavLink } from "react-router-dom";
import './navbar.css'
import  logo from "./whitelogo.png";


const navbar = () => {
  return (
    <>
        
        <nav>
        <div className='logonav'><img src={logo} alt='logo' height="90px" width="90px"/></div>
          <div>
            <ul id='navbar'>
              <li><NavLink to="/" exact activeclassName="active"><a>ABOUT</a></NavLink></li>
              <li><NavLink to="/helpline">HELPLINE</NavLink></li>
              <li><NavLink to="/map">MAP</NavLink></li>
              <li><NavLink to="/alert">ALERT</NavLink></li>
              <li><NavLink to="/login">LOGIN</NavLink></li>
              <li><NavLink to="/profile">PROFILE</NavLink></li>
            </ul>
          </div>
        </nav>
        
      
      
    </>
  )
}

export default navbar
