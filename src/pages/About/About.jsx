import React from 'react'
import "./about.scss"
import Skills from '../../components/Skills/Skills'
import Button from '../../components/Button/Button'
function About() {
  return (
    <div className='about-container'>  
      <h2>ABOUT ME</h2>  
      <div className="about-content">
        <div className="about-text">
          <h3>Howdy!</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
          <Button btnSize='md' label='DOWNLOAD CV'/>
        </div>
        <div className="about-skill">
          {/* <h3>SKILLS</h3> */}
            <Skills/>
        </div>
      </div>
    </div>
  )
}

export default About
