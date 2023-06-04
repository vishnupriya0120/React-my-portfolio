import React from 'react'
import mobile from "../../images/mobile.png"
import android from "../../images/android.png"
import hybrid from "../../images/hybrid.png"
import ImageComponent from '../../components/Image/ImageComponent'
import ImageCard from '../../components/ImageCard/ImageCard'
import "./work.scss"

function Work() {
  return (
    <div className='work-container'>
      <div className="container">
         <h2>PORTFOLIO</h2>
         <h3>Most Recent works</h3>
        <div className="work-content">
            <div className="column" data-aos="fade-up" data-aos-duration="1500">
              <ImageCard text="MOBILE APP PAGE" link="http://vishnupriya.demo23.acodez.ca/acodez/mobile-app-development-2/#mobile">
                <div className="work-img-container">
                  <ImageComponent image={mobile} className="work-img"/>
                </div>
              </ImageCard>
            </div>
            <div className="column"data-aos="fade-up" data-aos-duration="1500" >
              <ImageCard text="ANDROID APP PAGE" link="http://vishnupriya.demo23.acodez.ca/acodez/android-app-development/">
                  <div className="work-img-container">
                    <ImageComponent image={android} className="work-img"/>
                  </div>
              </ImageCard>
            </div>
            <div className="column" data-aos="fade-up" data-aos-duration="1500">
              <ImageCard text="HYBRID APP PAGE" link="http://vishnupriya.demo23.acodez.ca/acodez/hybrid-app-development/">
                <div className="work-img-container">
                  <ImageComponent image={hybrid} className="work-img"/>
                </div>
              </ImageCard>
            </div>

        </div>
       
      </div>

    </div>
  )
}

export default Work
