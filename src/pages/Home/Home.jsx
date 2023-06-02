import React from 'react'
import Navbar from '../Header/Navbar'
import Button from '../../components/Button/Button'
import SocialIconsContainer from '../../components/SocialIcons/SocialIconsContainer';
import ImageComponent from '../../components/Image/ImageComponent';
import About from '../About/About';
import Services from '../Services/Services';
import Work from '../Work/Work';
import Contact from '../Contact/Contact';
import MyImage from '../../images/myimage.png';
import  "./home.scss"


function Home() {
  return (
    <div className='home'>
      <Navbar/>
      <div className="home-content">
        <div className='container'> 
        <SocialIconsContainer/>
          <div className="icon-text-container">
           
            <div className="home-text"> 
              <h2>HELLO, MY NAME IS</h2>
              <h1>VISHNUPRIYA.</h1>
              <p>Creative UI/UX Developer Based in india</p>
              <Button label="Let's Talk"/>
            </div>
          </div>
          {/* <div className="image-container">
            <div className="profile-image">
              <ImageComponent image={MyImage} className="image-style" />
            </div>
          </div> */}
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

