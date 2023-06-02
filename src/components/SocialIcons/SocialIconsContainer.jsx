import React from "react";
import SocialIcon from "./Icon";
import {faGithub, faLinkedin, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import "./SocialIconsContainer.scss"

const SocialIconsContainer = () => {
    return (
      <div className="social-icons-container">
         <SocialIcon platform="github" icon={faGithub} className="social-icon" link="https://www.github.com/my-profile" />
        <SocialIcon platform="linkedin" icon={faLinkedin} className="social-icon" link="https://www.linkedin.com/my-profile" />
        <SocialIcon platform="twitter" icon={faTwitter} className="social-icon" link="https://www.twitter.com/my-profile" />
        <SocialIcon platform="instagram" icon={faInstagram} className="social-icon" link="https://www.instagram.com/my-profile" />
      </div>
    );
  };
  export default SocialIconsContainer
  