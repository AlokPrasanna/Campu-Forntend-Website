import React,{useEffect} from 'react'
import "./home.css"
import {Images} from '../../constants';
import { 
  Header, 
  Navigation, 
  CourseCard, 
  CampusCard, 
  FacilitiesCard, 
  TestimonialsCard,
} from '../../components';

const Home = () => {
  useEffect(() => {
    if (Images) {
      document.documentElement.style.setProperty("--bg-image", `url(${Images.university})`);
      document.documentElement.style.setProperty("--banner-image", `url(${Images.banner})`);
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

        {/* ----- Testimonials ----- */}
        <section className='testimonials'>
          <h1>What Our Students Say</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, culpa.</p>
          <p></p>
          <div className='row'>
            <TestimonialsCard 
              src={Images.student1}
              alt="Student"
              name="Christine Berkly"
              message="Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
              Sit, eum eius aperiam quisquam laborum nulla esse, 
              nihil obcaecati temporibus quidem, dolorem odio voluptatem autem explicabo!"
            />
            <TestimonialsCard 
              src={Images.student2}
              alt="Student"
              name="Christine Berkly"
              message="Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
              Sit, eum eius aperiam quisquam laborum nulla esse, 
              nihil obcaecati temporibus quidem, dolorem odio voluptatem autem explicabo!"
            />
          </div>
        </section>

        {/* ----- Call to Action ----- */}
        <section className='call-to-action'>
          <h1>
            Enroll For Our Various Online Courses <br/>
            Anywhere From The World
          </h1>
          <button className=''>
            <Navigation to="/" title="CONTACT US" />
          </button>
        </section>
    </div>
  )
}

export default Home
