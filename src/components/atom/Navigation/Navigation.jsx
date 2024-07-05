import React from 'react'
import "./navigation.css"
import { Link } from 'react-router-dom'

const Navigation = ({to , title , children}) => {
  return (
    <Link to={to} className='navigation'>{children}{title && <span>{title}</span>}</Link>
  )
}

export default Navigation;