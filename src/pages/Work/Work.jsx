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
            <div className="column">
              <ImageCard text="text" link="www.example.com">
                <div className="work-img-container">
                  <ImageComponent image={mobile} className="work-img"/>
                </div>
              </ImageCard>
            </div>
            <div className="column">
              <ImageCard text="text" link="www.example.com">
                  <div className="work-img-container">
                    <ImageComponent image={android} className="work-img"/>
                  </div>
              </ImageCard>
            </div>
            <div className="column">
              <ImageCard text="text" link="www.example.com">
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
