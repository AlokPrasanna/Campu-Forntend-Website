import React from 'react';
import "./facilitiesCard.css";

const FacilitiesCard = ({src , alt , title , subTitle}) => {
  return (
    <div className='facilities-card'>
        <img src={src} alt={alt} />
        <h3>{title}</h3>
        <p>{subTitle}</p>
    </div>
  )
}

export default FacilitiesCard