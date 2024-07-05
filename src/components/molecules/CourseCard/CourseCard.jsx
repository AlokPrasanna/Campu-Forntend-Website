import React from 'react'
import "./courseCard.css"

const CourseCard = ({title , definition}) => {
  return (
    <div className='course-card'>
        <h3>{title}</h3>
        <p>{definition}</p>
    </div>
  )
}

export default CourseCard