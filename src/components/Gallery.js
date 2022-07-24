import React from 'react'
import './Gallery.css'
import gll1 from '../assets/img2.png'
import gll2 from '../assets/img4.png'
import gll3 from '../assets/img3.png'
import gll4 from '../assets/img1.png'
import gll5 from '../assets/img5.png'
import gll6 from '../assets/img6.png'
import gll7 from '../assets/img7.png'

function Gallery() {
  return (
    <div id="gallery" className="gallery">
      <div className="heading">
        <h1>Gallery</h1>
        <div className='gallery_grid'>
        <div class="g1">
        <img src={gll1} alt="Image 1" class= "gallery-img gallery-img-1"></img>
        <img src={gll5} alt="Image 1" class= "gallery-img gallery-img-2"></img>
        <img src={gll6} alt="Image 1" class= "gallery-img gallery-img-3"></img>
        <img src={gll4} alt="Image 1" class= "gallery-img gallery-img-4"></img>
        <img src={gll3} alt="Image 1" class= "gallery-img gallery-img-5"></img>
        <img src={gll2} alt="Image 1" class= "gallery-img gallery-img-6"></img>
        <img src={gll7} alt="Image 1" class= "gallery-img gallery-img-7"></img>
        </div>
        </div>
        </div>
        </div>
        

      
  )
}

export default Gallery