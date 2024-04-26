import React from 'react'
import contact from '../images/contact.jpeg'

function ContactUs() {
  return (
    <div className='contact'>
        <div>
            <img className='contact-img' src={contact} alt='img'/>
        </div>
        <form className='contact-content'>
            <h2>Contact us to react Quicker</h2>
            <div className='form-input'>
                <label>Full Name</label>
                <input type="text" id="name" placeholder="Full Name" required/>
            </div>
            <div className='form-input'>
                <lable>Phone No.</lable>
                <input type='number' id='phone' placeholder='Phone Number' required/>
            </div>
            <div className='form-input'>
                <label>E-mail</label>
                <input type='email' id='email' placeholder='E-mail' required />
            </div>
            <button className='contact-btn'>Submit</button>
        </form>
    </div>
  )
}

export default ContactUs;