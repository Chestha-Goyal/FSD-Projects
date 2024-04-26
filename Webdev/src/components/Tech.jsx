import React from 'react'
import { FaHtml5 } from "react-icons/fa6";
import { FaReact } from "react-icons/fa6";
import { SiJavascript } from "react-icons/si";

function Tech() {
  return (
    <div className='tech'>
        <div id='heading'>
            <h1>Tech Stack</h1>
        </div>
        <div className='tech-content'>
            <div className='one'>
              <FaHtml5 style={{fontSize: "50px", color: "Green"}}/>
              <h3>HTML&CSS</h3>
              <p>Highly skilled in HTML & CSS, adaptly crafting visually appealing and responsive websites for optimal user experiences.</p>
            </div>
            <div className='two'>
              <SiJavascript style={{fontSize: "50px", color: "Green"}}/>
              <h3>Javascript</h3>
              <p>Expertise in JavaScript, building interactive and dynamic web applications with a focus on seamless user interactions and functionality.</p>
            </div>
            <div className='three'>
              <FaReact style={{fontSize: "50px", color: "Green"}}/>
              <h3>React</h3>
              <p>Advanced proficiency in React, developing efficient and interactive front-end applications with a strong emphasis on component-based architecture.</p>
            </div>
        </div>
    </div>
  )
}

export default Tech