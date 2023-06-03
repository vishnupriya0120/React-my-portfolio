// import React,{useRef} from 'react'
// import { Link } from 'react-router-dom'
// import {faBars,faTimes} from 'react-icons/fa'
// import "./navbar.scss"
 
//  function Navbar() {
//   const navRef = useRef();

//   const showNavbar = () => {
//     navRef.current.classList.toggle("responsive_nav");
//   }

//    return (
//       <div className='container'>
//         <nav className = "navbar" ref={navRef}>
//           <Link to="/home" className='link'>Logo</Link>
//             <ul>
//               <li className="item">
//                 <Link to="/about" className="link">01. About</Link> 
//               </li>
//               <li className="item">
//                 <Link to="/services" className='link'>02. Services</Link> 
//               </li>
//               <li className="item">
//                 <Link to="/work" className='link'>03. Work</Link> 
//               </li>
//               <li className="item">
//                 <Link to="contact" className='link'>04. Contact</Link>
//               </li>
//             </ul>
//             <button className="nav-btn nav-close-btn" onClick={showNavbar}>
//               <faTimes/>
//             </button>
//         </nav>
//             <button className="nav-btn" onClick={showNavbar}>
//               <faBars/>
//             </button>
//       </div>
//    )
//  }
 
//  export default Navbar

import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import {Link} from 'react-scroll';
import "./navbar.scss"


function Navbar() {
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};

	return (
		<header>
			<Link to="home" className="link" smooth={true} duration={500} ><h3>LOGO</h3></Link>
			<nav ref={navRef}>
				<Link to="about" className="link" smooth={true} duration={500} >01. About</Link>
				<Link to="services"className="link" smooth={true} duration={500} >02. Services</Link>
				<Link to="work" className="link" smooth={true} duration={500} >03. Work</Link>
				<Link to="contact" className="link" smooth={true} duration={500} >04. Contact</Link>
				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes />
				</button>
			</nav>
			<button
				className="nav-btn"
				onClick={showNavbar}>
				<FaBars />
			</button>
		</header>
	);
}

export default Navbar;
 