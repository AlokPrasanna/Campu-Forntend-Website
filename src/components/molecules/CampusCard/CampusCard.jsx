import React from 'react';
import "./campusCard.css"

const CampusCard = ({src , alt , text}) => {
  return (
    <div className='campus-card'>
        <img src={src} alt={alt} />
        <div className='layer'>
            <h3>{text}</h3>
        </div>
    </div>
  )
}

export default CampusCard