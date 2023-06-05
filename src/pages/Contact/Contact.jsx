import React from 'react'
import Form from '../../components/Form/Form'
import "./contact.scss"
const Contact=()=> {
  const handleFormSubmit = (formData) => {
    console.log(formData);
  };
  return (
    <div className='contact-container' id='contact'>
      <h2>GET IN TOUCH</h2>
      <div className="container">

        <Form onSubmit={handleFormSubmit}/>
      </div>
      
    </div>
  )
}

export default Contact
