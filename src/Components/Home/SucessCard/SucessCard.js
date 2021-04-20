import React from 'react';
import './SucessCard.css'

const SucessCard = ({story}) => {
    const {image, title, date} = story;
    return (
       <div className="story-box">
            <img src={image} alt=".."/>
            <div className="text">
                <p>{title}<br/>{date}</p>
            </div>
        </div>
    );
};

export default SucessCard;