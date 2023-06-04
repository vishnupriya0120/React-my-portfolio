
import React from 'react';
import Icon from '../SocialIcons/Icon';
import './card.scss'



const Card = ({ title, description,icon}) => {
  return (
    <div className="card">
      <Icon icon={icon} className="card-icon" />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default Card;
