import React from 'react';
import Navbar from './Navbar';
import WhyChoose from './WhyChoose';
import Footer from './Footer';
import { Data } from '../data';

function Book({value}) {
  return (
    <div>
        <Navbar value = {value}/>
        <h1 className='book-heading'>Book Your Services</h1>
        <div className='book-container'>
            {Data.map(({src, alt, price}) => (<div className='book-card'>
                <img src={src} alt={alt}/>
                <div className='book-detail'>
                    <h5>{alt}</h5>
                    <p>(Rs {price})</p>
                    <button className='btn'>Book</button>
                </div>
            </div>
        ))}
        </div>

        <WhyChoose/>
        <Footer/>
    </div>
  )
}

export default Book