import React from 'react'
import './Hero.css'
import main from '../../images/main.jpeg'

function Hero() {
  return (
    <div className='hero'>
      <img alt='MainImg' src={main}/>
      <div className='hero-text'>
        <h1>CONTINUE EXPLORING</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae <br/> explicabo debitis est autem dicta.</p>
        <button>EXPLORE TOURS</button>
      </div>
    </div>
  )
}

export default Hero