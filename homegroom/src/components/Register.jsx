import React from 'react'
import register from '../images/register.jpeg'

function Register() {
  return (
    <div className='register'>
        <div className='register-content'>
            <h2>Register as Worker</h2>
            <p>Register with HomeGroom by filling the from and we will reach you.</p>
            <button className='btn'>Fill the Details</button>
        </div>
        <div>
            <img className='register-image' src={register} alt='image'/>
        </div>
    </div>
  )
}

export default Register