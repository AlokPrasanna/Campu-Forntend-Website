import React,{useEffect} from 'react'
import "./home.css"
import {Images} from '../../constants';
import { Header , Navigation , CourseCard , CampusCard , FacilitiesCard } from '../../components';

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
        </section>
        
        {/* ----- Campus ----- */}
        <section className='campus'>
          <h1>Our Global Campus</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, culpa.</p>

          <div className='row'>
            <CampusCard src={Images.uniImage1} alt="Campus-Image-1" text="LONDON" />
            <CampusCard src={Images.uniImage2} alt="Campus-Image-2" text="GERMANY" />
            <CampusCard src={Images.uniImage3} alt="Campus-Image-3" text="JAPAN" />
          </div>
        </section>

        {/* ----- Facilities ----- */}
        <section className='facilities'>
          <h1>Our Facilities</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, culpa.</p>

          <div className="row">
            <FacilitiesCard 
              src={Images.facility1}
              alt="Library"
              title="World Class Library"
              subTitle="Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Debitis voluptatem ad laboriosam eos, vitae consequatur!"
            />
            <FacilitiesCard 
              src={Images.facility2}
              alt="Ground"
              title="Largest Play Ground"
              subTitle="Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Debitis voluptatem ad laboriosam eos, vitae consequatur!"
            />
            <FacilitiesCard 
              src={Images.facility3}
              alt="Canteen"
              title="Tasty and Healthy Food"
              subTitle="Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Debitis voluptatem ad laboriosam eos, vitae consequatur!"
            />
          </div>
        </section>
    </div>
  )
}

export default Home
