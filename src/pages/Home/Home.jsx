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
import { Element } from 'react-scroll';
import Footer from '../../components/Footer/Footer';

import  "./home.scss"

function Home() {
  return (
    <div className='home' id='home'>
      <Navbar/>
      <div className="home-content">
        <div className='container'> 
        <SocialIconsContainer/>
        <div className="text-image-container" >
          {/* <div className="icon-text-container"> */}
              <div className="home-text" data-aos="fade-up" data-aos-duration="1500"> 
                <h2>HELLO, MY NAME IS</h2>
                <h1>VISHNUPRIYA.</h1>
                <p>Creative UI/UX Developer Based in india</p>
                <a href="#contact"><Button link="" label="Let's Talk"/></a>
              </div>
            {/* </div> */}
            <div className="image-container">
              <div className="profile-image" data-aos="fade-up" data-aos-duration="1500">
                <ImageComponent image={MyImage} className="image-style" />
              </div>
            </div>
          </div>
        </div>
        <div class="scroll-downs">
          <div class="mousey">
            <div class="scroller"></div>
          </div>
        </div>
      </div>
      <Element name='about'>
        <About/>
      </Element>
      <Element name='services'>
         <Services/>
      </Element>
      <Element name='work'>
        <Work/>
      </Element>
      <Element name='contact'>
        <Contact/>
      </Element>
      <Footer/>
      
    </div>
  )
}

export default Home

