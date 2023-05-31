
import React from 'react';

const Card = ({ title, description, image }) => {
  return (
    <div className="card">
      {image && <img src={image} alt="Card Image" />}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default Card;
