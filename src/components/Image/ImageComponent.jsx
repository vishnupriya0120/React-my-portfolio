import React from 'react';

const ImageComponent = ({ image,className }) => {
  return <img src={image} alt="" className={className} />;
};

export default ImageComponent;
