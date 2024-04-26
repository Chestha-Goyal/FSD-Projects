import React, { Component } from 'react'
import './Navbar.css'
import { FaBars } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaSquarespace } from "react-icons/fa";

class Navbar extends Component {
  state = {clicked: false};
  handleClick = () => {
    this.setState({ clicked: !this.state.clicked})
  }

  render(){
  return (
    <div className='container'>
        <h1 className='logo'>B a c k<span style={{color: "darkturquoise"}}> R o a d s</span></h1>
        <div className='icons' onClick={this.handleClick}>{this.state.clicked ? <FaTimes/> : <FaBars/>}
        </div>
        
        <ul className={ this.state.clicked ? "nav-menu active" : "nav-menu"}>
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Tours</li>
        </ul>
        <div className='nav-icons'>
        <FaFacebook/>
        <FaTwitter/>
        <FaSquarespace/>
        </div>
    </div>
  )
  }
}

export default Navbar