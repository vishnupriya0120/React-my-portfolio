import React,{useState} from "react";
import "./imagecard.scss"

const ImageCard = ({children,link,text}) =>{
    const [isHovered,setIsHovered]= useState(false);
        const handleMouseEnter = () => {
            setIsHovered(true);
        };
        
        const handleMouseLeave = () => {
            setIsHovered(false);
        };
    return(
        <div className="imagecard" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            {React.cloneElement(children, {
                className: `image ${children.props.className}`,
            })}
            {isHovered && (
                <div className="overlay">
                <p className="text">{text}</p>
                <a href={link} className="link">Learn More</a>
            </div>
            )}
        </div>

    );
};

export default ImageCard
