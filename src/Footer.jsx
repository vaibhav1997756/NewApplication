import React from 'react'
import {Link} from 'react-router-dom';
import "./footer.css";

const Footer = () => {
  return (
  <div className='footer-section'>
  <div className='ft-flex'>
    <div>
        <h3>About us</h3>
        <ul>
        <li><Link to="/"  className='foot-line'>Home</Link></li>
        <li><Link to="/industrialist" className='foot-line'>Industry</Link></li>
            
        </ul>
    </div>
    <div>
    <h3>Position</h3>
        <ul>
            <li><Link to="/positionheld" className='foot-line'>Position Held</Link></li>
        </ul>
    </div>
    <div>
    <h3>Achievements</h3>
        <ul>
        <li><Link to="/award" className='foot-line'>Awards</Link></li>
            
           
        </ul>
    </div>
    <div>
    <h3>Social Work</h3>
        <ul>
        <li><Link to="/socialwork" className='foot-line'>Social Work</Link></li> 
        </ul>
    </div>
      <div>
     <h3>Educational Institute</h3>
        <ul>
            <li><Link to="/educationist" className='foot-line'>Institute</Link></li>
        </ul>
    </div> 
    </div>
    </div>
  )
}

export default Footer