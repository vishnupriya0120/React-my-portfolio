import React from "react";
import SocialIcon from "./Icon";
import { faLinkedin, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import "./SocialIconsContainer.scss"

const SocialIconsContainer = () => {
    return (
      <div className="social-icons-container">
        <SocialIcon platform="facebook" icon={faLinkedin} className="social-icon" link="https://www.facebook.com/my-profile" />
        <SocialIcon platform="twitter" icon={faTwitter} className="social-icon" link="https://www.twitter.com/my-profile" />
        <SocialIcon platform="instagram" icon={faInstagram} className="social-icon" link="https://www.instagram.com/my-profile" />
      </div>
    );
  };
  export default SocialIconsContainer
  