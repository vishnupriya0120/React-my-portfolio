import React from 'react'
import { Link } from 'react-router-dom'
import "./navbar.scss"
 
 function Navbar() {
   return (
      <>
        <nav className = "navbar">
          <Link to="/home" className='link'>Logo</Link>
            <ul>
              <li className="item">
                <Link to="/about" className="link">About</Link> 
              </li>
              <li className="item">
                <Link to="/services" className='link'>Services</Link> 
              </li>
              <li className="item">
                <Link to="/work" className='link'>Work</Link> 
              </li>
              <li className="item">
                <Link to="contact" className='link'>Contact</Link>
              </li>
            </ul>
        </nav>
      </>
   )
 }
 
 export default Navbar
 