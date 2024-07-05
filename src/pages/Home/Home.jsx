import React,{useEffect} from 'react'
import "./home.css"
import {Images} from '../../constants';
import { Header } from '../../components';

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
      </section>
    </div>
  )
}

export default Home
