import React, {useRef} from 'react';
import "./header.css";
import Navigation from '../../atom/Navigation/Navigation';
import {Images} from '../../../constants';

const Header = () => {
  const linksRef = useRef(null);

  const hideMenu = () => {
    if (linksRef.current) {
      linksRef.current.style.right = "-200px";
    }
  }

  const showMenu = () => {
    if (linksRef.current) {
      linksRef.current.style.right = "0";
    }
  }
  return (
    <div className='header'>
      <Navigation to="/" >
        <img src={Images.logo} alt='Logo' />
      </Navigation>
      <div className='links' id='link' ref={linksRef} >
        <svg onClick={hideMenu} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="4" stroke="currentColor" className="size-6 svg">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
        </svg>
        <ul>
          <li><Navigation to="/" title="HOME"/></li>
          <li><Navigation to="/" title="ABOUT"/></li>
          <li><Navigation to="/" title="COURSES"/></li>
          <li><Navigation to="/" title="BLOG"/></li>
          <li><Navigation to="/" title="CONTACT"/></li>
        </ul>
      </div>
      <svg onClick={showMenu} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="4" stroke="currentColor" className="size-6 svg">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
      </svg>
    </div>
  )
}

export default Header