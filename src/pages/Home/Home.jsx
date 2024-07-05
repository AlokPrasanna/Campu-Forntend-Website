import React,{useEffect} from 'react'
import "./home.css"
import {Images} from '../../constants';
import { Header , Navigation , CourseCard } from '../../components';

const Home = () => {
  useEffect(() => {
    if (Images) {
      document.documentElement.style.setProperty("--bg-image", `url(${Images.university})`);
    }
  }, [Images]);
  return (
    <div>
    {/* ------ Header Section ------ */}
      <section className='home-header'>
        <Header />
        <div className='text-box'>
          <h1>World's Biggest University</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus accusantium voluptas quaerat odit.<br /> Voluptatem, beatae! Corporis veritatis saepe repudiandae totam distinctio sequi non.</p>
          <button><Navigation to="/" title="Visit Us To Know More"/></button>
        </div>
      </section>

      {/* ----- Courses Section ----- */}
        <section className='course'>
          <h1>Courses We Offer</h1>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>

          <div className='row'>
            <CourseCard 
              title="Intermediate"
              definition="Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Debitis voluptatem ad laboriosam eos, vitae consequatur!"
            />
            <CourseCard 
              title="Degree"
              definition="Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Debitis voluptatem ad laboriosam eos, vitae consequatur!"
            />
            <CourseCard 
              title="Post Graduation"
              definition="Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Debitis voluptatem ad laboriosam eos, vitae consequatur!"
            />
          </div>
          <p></p>
        </section>
    </div>
  )
}

export default Home
