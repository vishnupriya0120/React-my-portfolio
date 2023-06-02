import React,{useState} from 'react'
import "./form.scss"
const Form = ({onSubmit,className}) =>{
  const [formData,setFormData]= useState({});
  const [isMessageSent ,setIsMessageSent]= useState(false);
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    setIsMessageSent(true);
  };

  return (
    <div className="form">
      <form className='userform' onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder='Name' onChange={handleChange} />
        <input type="email" name="email" placeholder='Email' onChange={handleChange} />
        <textarea name="message"  Placeholder='Message' onChange={handleChange} />

        <button type="submit">
          {isMessageSent ? 'Message Sent' : 'SHOOT !'}
        </button>
      </form>
    </div>
  );
}

export default Form
