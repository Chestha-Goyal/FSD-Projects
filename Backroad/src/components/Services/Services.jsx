import React from 'react'
import { FaWallet } from "react-icons/fa";
import './Services.css'
import { FaSocks } from "react-icons/fa";
import { FaTree } from "react-icons/fa"

function Services() {
  return (
    <section className="section services" id="services">
      <div className="section-title">
        <h2>OUR <span style={{color: 'darkturquoise'}}>SERVICES</span></h2>
      </div>
      <div className="section-center services-center">
        <article className="service">
          <span className="service-icon"><FaWallet /></span>
          <div className="service-info">
            <h4 className="service-title">Saving Money</h4>
            <p className="service-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.
            </p>
          </div>
        </article>

        <article className="service">
          <span className="service-icon"><FaTree /></span>
          <div className="service-info">
            <h4 className="service-title">Endless Hiking</h4>
            <p className="service-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores, officia.
            </p>
          </div>
        </article>

        <article className="service">
          <span className="service-icon"><FaSocks /></span>
          <div className="service-info">
            <h4 className="service-title">Amazing Comfort</h4>
            <p className="service-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores, officia.
            </p>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Services