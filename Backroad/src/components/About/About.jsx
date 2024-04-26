import React from 'react'
import about from '../../images/about.jpeg'
import './About.css'

function About() {
  return (
    <div className='about'>
      <h1 className='heading'>ABOUT <span style={{color: "darkTurquoise"}}>US</span></h1>
      <img alt='About' src={about}/>
      <div className='contents'>
        <h1>Explore The Difference</h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur quisquam harum nam cumque temporibus explicabo dolorum sapiente odio unde dolor?</p>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur quisquam harum nam cumque temporibus explicabo dolorum sapiente odio unde dolor?</p>
        <button>READ MORE</button>
      </div>
    </div>
  )
}

export default About