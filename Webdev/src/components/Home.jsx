import React from 'react'
import home from '../assets/home.webp'
import { FaLinkedin } from "react-icons/fa6";
import { FaSquareGithub } from "react-icons/fa6";
import { FaSquareTwitter } from "react-icons/fa6";

function Home() {
  return (
    <div className='home'>
        <div className='home-banner'>
            <div className='logo'><a href='#'>Web<span>Dev</span></a></div>
            <ul>
                <li><a href='#'>Home</a></li>
                <li><a href='#'>Skills</a></li>
                <li><a href='#'>About</a></li>
                <li><a href='#'>Projects</a></li>
            </ul>
        </div>
        <div className='home-content'>
            <h1>I'm John</h1>
            <p className='text'>Front-End Developer</p>
            <p className='para'>Turning Ideas Into Interactive Reality</p>
            <div className='icons'>
            <FaLinkedin/>
            <FaSquareGithub/>
            <FaSquareTwitter/>
            </div>
              <img src={home} alt='image'/>
        </div>
    </div>
  )
}

export default Home;