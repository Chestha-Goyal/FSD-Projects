import React from 'react'
import one from '../assets/one.jpeg'
import two from '../assets/two.jpg'
import three from '../assets/three.avif'
import { TbWorldWww } from "react-icons/tb";
import { FaSquareGithub } from 'react-icons/fa6';

function Creations() {
  return (
    <div className='creations'>
        <div>
            <h1>Web Creations</h1>
        </div>
        <div style={{paddingTop: "60px", display: "flex", marginLeft: "-18%"}}>
        <div className='card'>
          <img src={one} alt='image'/>
          <div className='card-content'>
            <h3>First Project</h3>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto enim illo magnam deserunt dolorum optio id veniam vero dolor ad consequatur velit in, error mollitia soluta delectus esse architecto? Exercitationem?</p>
            <TbWorldWww id='icons'/>
            <FaSquareGithub id='icons'/>
          </div>
        </div>
        <div className='card'>
          <img src={two} alt='image'/>
          <div className='card-content'>
            <h3>Second Project</h3>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto enim illo magnam deserunt dolorum optio id veniam vero dolor ad consequatur velit in, error mollitia soluta delectus esse architecto? Exercitationem?</p>
            <TbWorldWww id='icons'/>
            <FaSquareGithub id='icons'/>
          </div>
        </div>
        <div className='card'>
          <img src={three} alt='image'/>
          <div className='card-content'>
            <h3>Third Project</h3>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto enim illo magnam deserunt dolorum optio id veniam vero dolor ad consequatur velit in, error mollitia soluta delectus esse architecto? Exercitationem?</p>
            <TbWorldWww id='icons'/>
            <FaSquareGithub id='icons'/>
          </div>
        </div>
        </div>
    </div>
  )
}

export default Creations;