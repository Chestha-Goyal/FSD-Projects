import React from 'react'
import tour1 from '../../images/tour-1.jpeg'
import tour2 from '../../images/tour-2.jpeg'
import tour3 from '../../images/tour-3.jpeg'
import tour4 from '../../images/tour-4.jpeg'
import tour5 from '../../images/tour-5.jpeg'
import tour6 from '../../images/tour-6.jpeg'
import './Tours.css'
import TourData from './TourData'

function Tours() {
  return (
    <div className='tour'>
      <h1>FEATURED <span style={{color: 'darkturquoise'}}> TOURS</span></h1>
      <div className='tourCard'>
        <TourData image={tour1} heading='Tibet Adventure' text='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.' location='China' days='6 Days' price='From $2100'/>
        <TourData image={tour2} heading='Best Of Java' text='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.' location='Indonesia' days='11 Days' price='From $1400'/>
        <TourData image={tour3} heading='Explore Hong Kong' text='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.' location='HongKong' days='8 Days' price='From $5000'/>
        <TourData image={tour4} heading='Kenya Highlights' text='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.' location='Kenya' days='20 Days' price='From $3300'/>
        {/* <TourData image={tour5} heading='Wildlife Highlights' text='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.' location='Africa' days='13 Days' price='From $4000'/>
        <TourData image={tour6} heading='Taj Mahal Highlights' text='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.' location='Agra' days='7 Days' price='From $3000'/> */}
      </div>
    </div>
  )
}

export default Tours