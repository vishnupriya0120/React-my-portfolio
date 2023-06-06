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
        <div className="services-content"  data-aos="fade-up" data-aos-duration="1500">
          <Card
            title="UI/UX DEVELOPMENT"
            description=" UI/UX development services that bring your digital products to life. Using the latest design tools and technologies that helps in making visually appealing interfaces."
            icon={faCode}
          />
          <Card
            title="REACT JS DEVELOPMENT"
            description="Building dynamic and high-performing web applications using the React framework, By Leveraging the power of React's component-based architecture, I develop reusable and modular code, promoting scalability and easy maintenance."
            icon={faReact}
          />
        </div>
      </div>
      
      
    </div>
  )
}

export default Services
