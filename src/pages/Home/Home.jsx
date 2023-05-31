import React from 'react'
import Navbar from '../Header/Navbar'
import Button from '../../components/Button/Button'
import SocialIconsContainer from '../../components/SocialIcons/SocialIconsContainer';
import About from '../About/About';
import Services from '../Services/Services';
import Work from '../Work/Work';
import Contact from '../Contact/Contact';
import  "./home.scss"


function Home() {
  return (
    <div className='home'>
      <Navbar/>
        <div className='home-content'>
          <SocialIconsContainer/>
          <div className="home-text"> 
            <h2>HELLO MY NAME IS</h2>
            <h1>VISHNUPRIYA.</h1>
            <p>Creative UI/UX Developer Based in india</p>
            <Button label="Let's Talk"/>
          </div>
          <div className="profile-image">
          </div>
          
        </div>
      <About/>
      <Services/>
      <Work/>
      <Contact/>
    </div>
  )
}

export default Home

