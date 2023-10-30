import React from 'react'
import {Link} from 'react-router-dom';

import { useState } from "react"

import "./Navbar.css";


const Nav = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false)
return (

  // <div>Navbar</div>
  <nav className="navigation" id='position'>
    <a href="/" className="brand-name">
      Mr.Shishir Jaipuria
    </a>
    <button className="hamburger" onClick={() => {
        setIsNavExpanded(!isNavExpanded)
      }}>
      {/* icon from heroicons.com */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5"
        viewBox="0 0 20 20"
        fill="white"
      >
        <path
          fillRule="evenodd"
          d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
          clipRule="evenodd"
        />
      </svg>
    </button>
    <div className={isNavExpanded ? "navigation-menu expanded" : "navigation-menu"}>
      <ul>
        <li>
          <Link to="/" className='nav-link' title=''>Home</Link>
        </li>
         <li>
          <Link to="/industrialist" className='nav-link' title='qwerty'>Industrialist</Link>
        </li> 
        <li>
          <Link to="/educationist" className='nav-link'>Educationist</Link>
        </li>
        <li>
          <Link to="/positionheld" className='nav-link'>Position Held</Link>
        </li>
        <li>
          <Link to="/award" className='nav-link'>Awards</Link>
        </li>
        <li>
         <Link className='nav-link'>Family Tree</Link>
        </li> 
        <li>
          <Link className='nav-link'>Some Speeches</Link>
        </li>
        <li>
          <Link className='nav-link'>Articles</Link>
        </li>
        <li>
          <Link to="/socialwork" className='nav-link'>Social Work</Link>
        </li>
        {/* <li>
          <Link to="/jai" className='nav-link'>Card</Link>
        </li> */}
          <li>
          <Link to="/examrules" className='nav-link'>Exam Rules</Link>
        </li> 
        


       
         <li>
          <Link to="/aboutus" className='nav-link'>About us</Link>
        </li>  
      </ul>
    </div>
  </nav>
)
}

export default Nav