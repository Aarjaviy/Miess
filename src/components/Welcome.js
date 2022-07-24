import React from 'react'
import './Welcome.css'
import welcome1 from "../assets/welcome1.png";
import welcome2 from "../assets/welcome2.png"
import welcome3 from "../assets/welcome3.png"

function Welcome() {
  return (
    <div id='welcome' className="welcome">
      <div className="txt">
        <h1>WELCOME TO <span>MIESS</span></h1>
        <p className="description">Mechanical And Industrial Engineering Students Society</p>
      </div>
      <div className="img-grid">
        <div className="col col-1 w1">
          <img src={welcome1} alt="welcome img1"></img>
        </div>
        <div className="col col-2 w2 row">
          <img src={welcome2} className="column" alt="welcome img2"></img>
          <img src={welcome3} className="column" alt="welcome img3"></img>
        </div>
      </div>
    </div>
  )
}

export default Welcome