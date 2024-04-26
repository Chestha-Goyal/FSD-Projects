import React from 'react'
import './Footer.css'
import { FaTwitter } from 'react-icons/fa'
import { FaFacebook } from 'react-icons/fa'
import { FaSquarespace } from 'react-icons/fa'


function Footer() {
  return (
    <div className='footer'>
      <ul className='links'>
        <li><a href="#home" className='link'>Home</a></li>
        <li><a href="#about" className='link'>About</a></li>
        <li><a href="#services" className='link'>Services</a></li>
        <li><a href="#tours" className='link'>Tours</a></li>
      </ul>
      <ul className='icons'>
        <FaFacebook className='one'/>
        <FaTwitter className='two'/>
        <FaSquarespace className='three'/>
      </ul>
      <p className='copyright'>
        copyright & Backroads travel tours company
        <span id='date'>2024</span>
          All rights reserved
      </p>
    </div>
  )
}

export default Footer