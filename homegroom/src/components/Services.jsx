import React from 'react'
import { Data } from '../data.js';
import Carousel from 'react-bootstrap/Carousel';

function Services() {
  return (
    <div className='services'>
        <h1>Featured Services Offered</h1>
        <p>We offer best services by providing professional servants</p>
        <Carousel data-bs-theme="dark">
          {Data.map(({className, src, alt}) => (
            <Carousel.Item>
              <div className='img'>
                <img src={src} className='service-image' alt={alt}></img>
                <h3>{alt}</h3>
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
    </div>
  )
}

export default Services