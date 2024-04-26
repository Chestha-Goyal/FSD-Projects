import React from 'react'
import woman from '../assets/woman.webp'

function Coffee() {
  return (
    <div className='coffee'>
      <img src={woman} alt='image' className='img2'/>
      <div className='coffee-content'>
        <h1>Code And Coffee</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non autem voluptas nobis quas, fugiat commodi? Eum, corrupti, amet, harum nostrum mollitia assumenda et optio doloribus nesciunt molestiae modi vel odit.</p>
      </div>
    </div>
  )
}

export default Coffee;