import React from 'react'

import Skills from '../../components/Skills/Skills'
import Button from '../../components/Button/Button'
import CV from "../../files/cv.pdf";
import "./about.scss";
function About() {
  return (
    <div className='about-container'>  
      <h2> ABOUT ME</h2>
      <div className="container">
          <div className="about-content">
            <div className="about-text" data-aos="fade-up" data-aos-duration="1500">
              <h3>Howdy!</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
              <a href={CV} download="cv"><Button btnSize='md' label='DOWNLOAD CV'/></a>
            </div>
            <div className="about-skill">
              {/* <h3>SKILLS</h3> */}
                <Skills/>
            </div>
          </div>
      </div>  
      
    </div>
  )
}

export default About
