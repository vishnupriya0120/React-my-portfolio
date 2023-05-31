import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import './socialicon.scss'


const SocialIcon = ({ platform, link }) => {
    let icon = null;
  
    switch (platform) {
      case 'facebook':
        icon = faLinkedin;
        break;
      case 'twitter':
        icon = faTwitter;
        break;
      case 'instagram':
        icon = faInstagram;
        break;
      default:
        return null;
    }
  
    return (
      <a href={link} target="_blank" rel="noopener noreferrer" className="social-icon">
        <FontAwesomeIcon icon={icon} />
      </a>
    );
  };
  

export default SocialIcon


