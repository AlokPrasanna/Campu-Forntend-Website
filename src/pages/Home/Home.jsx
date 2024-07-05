import React,{useEffect} from 'react'
import "./home.css"
import {Images} from '../../constants';
import { Header , Navigation } from '../../components';

const Home = () => {
  useEffect(() => {
    if (Images) {
      document.documentElement.style.setProperty("--bg-image", `url(${Images.university})`);
    }
  }, [Images]);
  return (
    <div>
      <section className='home-header'>
        <Header />
        <div className='text-box'>
          <h1>World's Biggest University</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus accusantium voluptas quaerat odit.<br /> Voluptatem, beatae! Corporis veritatis saepe repudiandae totam distinctio sequi non.</p>
          <button><Navigation to="/" title="Visit Us To Know More"/></button>
        </div>
      </section>
    </div>
  )
}

export default Home
