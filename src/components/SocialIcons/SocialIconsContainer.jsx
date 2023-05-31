import React from "react";
import SocialIcon from "./Socialicon";
import "./SocialIconsContainer.scss"

const SocialIconsContainer = () => {
    return (
      <div className="social-icons-container">
        <SocialIcon platform="facebook" link="https://www.facebook.com/my-profile" />
        <SocialIcon platform="twitter" link="https://www.twitter.com/my-profile" />
        <SocialIcon platform="instagram" link="https://www.instagram.com/my-profile" />
      </div>
    );
  };
  export default SocialIconsContainer
  