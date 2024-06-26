import React from 'react';
import home1 from '../images/home1.avif'
import home2 from '../images/home2.avif'
import home3 from '../images/home3.avif'
import Navbar from './Navbar';
import WhyChoose from './WhyChoose';
import Register from './Register';
import Services from './Services';
import ContactUs from './ContactUs';
import Footer from './Footer';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';


function Home({value}) {
    const navigate = useNavigate();

  return (
    <div>
      <div className='home'>
        <Navbar value = {value}/>
            <div className='home-content'>
                <div className='home-content-text'>
                    <h1 className='home-h'>Customer's <br/>Choice <br />HomeGroom</h1>
                    <p className='home-p'>Finding a reliable online service is not more difficult speciallly when it comes to domestic help. so what are you waiting for click the button below</p>
                    <button className='btn home-btn ' type='button' onClick={() => navigate('/book')}>Book Now</button>
                </div>

                <div className='home-images'>
                    <img src={home1} className='image1'/>
                    <img src={home2} className='image2'/>
                    <img src={home3} className='image3'/>
                </div>
            </div>
            <div class="custom-shape-divider-bottom-1712202460">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" class="shape-fill"></path>
                </svg>
            </div>
        </div>
        <div className='others'>
            <Services/>
            <WhyChoose/>
            <Register/>
            <ContactUs/>
        </div>
        <Footer/>
    </div>
  )
}

export default Home;
