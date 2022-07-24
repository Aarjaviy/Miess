import React from 'react'
import './AboutUs.css'
import about from '../assets/AboutUs.png'

function AboutUs() {
  return (
    <div id='about'>
    <div className="about-us">
    <img src={about} alt="About us" />
      <div className="about-content">
        <h1>About Us</h1>
        <p>Miess is a society representing the students of mechanical and industrial engineering department of IIT Roorkee. Our aim is to build a strong interaction between students and faculty and hence act as the medium for students to put their views on the desk of the faculty. It is the main driving force behind a number of enriching and interesting programmes and events for the welfare of students and hence aiding in discovering their passion by keeping them in touch with latest development in the field of mechanical and production engineering. The group aims to be a common platform for all the needs of MIED students and continue to reach newer heights by the constant support.</p>
      </div>
    </div>
    
    </div>
  )
}

export default AboutUs