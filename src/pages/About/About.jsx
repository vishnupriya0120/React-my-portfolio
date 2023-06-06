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
              <p>I am a skilled UI/UX and React developer based in Calicut, India. With a passion for creating exceptional user experiences and designing visually appealing interfaces, I specialize in crafting intuitive and responsive web applications. </p>
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
