
import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import {Link} from 'react-scroll';
import Logo from "../../images/logo.svg";
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
			<Link to="home" className="link" smooth={true} duration={500} ><img src={Logo} alt=""></img></Link>
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
 