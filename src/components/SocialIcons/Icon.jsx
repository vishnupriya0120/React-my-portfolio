import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './icon.scss'


const Icon = ({ icon,link,className }) => {

  
    return (
      <a href={link} target="_blank" rel="noopener noreferrer" className={`icon ${className}`}>
        <FontAwesomeIcon icon={icon}  />
      </a>
    );
  };
  

export default Icon


