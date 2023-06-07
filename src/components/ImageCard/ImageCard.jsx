import React,{useState} from "react";

import Icon from "../SocialIcons/Icon";
import "./imagecard.scss"

const ImageCard = ({children,link,text,icon}) =>{
    const [isHovered,setIsHovered]= useState(false);
        const handleMouseEnter = () => {
            setIsHovered(true);
        };
        
        const handleMouseLeave = () => {
            setIsHovered(false);
        };
    return(
        <div className="imagecard" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} >
            {React.cloneElement(children, {
                className: `image ${children.props.className}`,
            })}
            {isHovered && (
                <div className="overlay">
                <p className="text">{text}</p>
                <a href={link} rel="noreferrer" target="_blank" className="link"><Icon icon={icon} className="imagecard-icon" /></a>
            </div>
            )}
        </div>

    );
};

export default ImageCard
