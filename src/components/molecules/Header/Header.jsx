import React from 'react';
import "./header.css";
import Navigation from '../../atom/Navigation/Navigation';
import {Images} from '../../../constants';

const Header = () => {
  return (
    <div className='header'>
      <Navigation to="/" >
        <img src={Images.logo} alt='Logo' />
      </Navigation>
      <div className='links'>
        <ul>
          <li><Navigation to="/" title="HOME"/></li>
          <li><Navigation to="/" title="ABOUT"/></li>
          <li><Navigation to="/" title="COURSES"/></li>
          <li><Navigation to="/" title="BLOG"/></li>
          <li><Navigation to="/" title="CONTACT"/></li>
        </ul>
      </div>
    </div>
  )
}

export default Header