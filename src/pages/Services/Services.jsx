import React from 'react'
import Card from '../../components/Card/Card'

import { faCode } from '@fortawesome/free-solid-svg-icons';
import { faReact } from '@fortawesome/free-brands-svg-icons';
import "./services.scss"


function Services() {
  return (
    <div className='services-container'>
      <h2>MY SERVICES </h2>
      <div className="container">
        <div className="services-content">
          <div className="box" data-aos="fade-up" data-aos-duration="1500">
          <Card
            title="UI/UX DEVELOPMENT"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            icon={faCode}
          />
          </div>
          <div className="box" data-aos="fade-up" data-aos-duration="1500">
          <Card
            title="REACT JS DEVELOPMENT"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            icon={faReact}
          />
          </div>
        </div>
      </div>
      
      
    </div>
  )
}

export default Services
