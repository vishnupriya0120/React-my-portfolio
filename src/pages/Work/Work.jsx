import React from 'react'
import mobile from "../../images/mobile.svg"
import android from "../../images/android.svg"
import hybrid from "../../images/hybrid.svg"
import ImageComponent from '../../components/Image/ImageComponent'
import ImageCard from '../../components/ImageCard/ImageCard'
import { faLink } from '@fortawesome/free-solid-svg-icons'
import "./work.scss"

function Work() {
  return (
    <div className='work-container'>
      <div className="container">
         <h2>PORTFOLIO</h2>
         {/* <h3>Most Recent works</h3> */}
        <div className="work-content">
            <div className="column" data-aos="fade-up" data-aos-duration="1500">
              <ImageCard link="http://vishnupriya.demo23.acodez.ca/acodez/mobile-app-development-2/#mobile" icon={faLink}>
                <div className="work-img-container">
                  <ImageComponent image={mobile} className="work-img"/>
                </div>
              </ImageCard>
              <div className="imagecard-txt">
                  <h4>Mobile App Development</h4>
                  <p>UI/UX development done for Acodez a company in India.</p>
              </div>
            </div>
            <div className="column"data-aos="fade-up" data-aos-duration="1500" >
              <ImageCard link="http://vishnupriya.demo23.acodez.ca/acodez/android-app-development/" icon={faLink}>
                  <div className="work-img-container">
                    <ImageComponent image={android} className="work-img"/>
                  </div>
              </ImageCard>
              <div className="imagecard-txt">
                  <h4>Android App Development</h4>
                  <p>UI/UX development done for Acodez a company in India.</p>
              </div>
            </div>
            <div className="column" data-aos="fade-up" data-aos-duration="1500">
              <ImageCard link="http://vishnupriya.demo23.acodez.ca/acodez/hybrid-app-development/" icon={faLink}>
                <div className="work-img-container">
                  <ImageComponent image={hybrid} className="work-img"/>
                </div>
              </ImageCard>
              <div className="imagecard-txt">
                <h4>Hybrid App Development</h4>
                <p>UI/UX development done for Acodez a company in India.</p>
              </div>
            </div>
        </div>
       
      </div>

    </div>
  )
}

export default Work
