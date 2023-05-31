import React from 'react';

const ImageComponent = ({ image,className }) => {
  return <img src={image} alt="My Image" className={className} />;
};

export default ImageComponent;
