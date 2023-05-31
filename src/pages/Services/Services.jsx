import React from 'react'
import Card from '../../components/Card/Card'
import "./services.scss"

function Services() {
  return (
    <div className='services-container'>
      <h2>SERVICES</h2>
      <div className="services-content">
        <div className="box">
        <Card
          title="UI/UX DEVELOPMENT"
          description="This is the description for Card 1"
          image="path_to_card_1_image.jpg"
        />
        </div>
        <div className="box">
        <Card
          title="REACT JS DEVELOPMENT"
          description="This is the description for Card 1"
          image="path_to_card_1_image.jpg"
        />
        </div>
      </div>
      
    </div>
  )
}

export default Services
