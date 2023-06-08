import React,{useState,useRef} from 'react'
import emailjs from 'emailjs-com';
import "./form.scss"
const Form = ({onSubmit,className}) =>{
  const [formData,setFormData]= useState({});
  const [isMessageSent ,setIsMessageSent]= useState('SHOOT');
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    sendEmail();
    changeButtonText();
  };

  const form = useRef(null);

  const sendEmail = () => {

    emailjs.sendForm('service_dv9oe0a', 'template_3812syo', form.current, 'iw0ZkgEig_2z7Gn-8')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
  const changeButtonText = () => {
    setIsMessageSent('Message sent');
  };
  return (
    <div className="form">
      <form autoComplete='off' ref={form} className='userform' onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder='Name' onChange={handleChange} />
        <input type="email" name="email" placeholder='Email' onChange={handleChange} />
        <textarea name="message"  placeholder='Message' onChange={handleChange} />
        <button type="submit"disabled={isMessageSent === 'Message Sent'}>
          {isMessageSent}
          {/* {isMessageSent ? 'Message Sent' : 'SHOOT !'} */}
        </button>
      </form>
    </div>
  );
}

export default Form
