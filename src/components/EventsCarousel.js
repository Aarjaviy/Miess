import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import indvis from '../assets/industrial_visit.png'
import forfre from '../assets/formal.png'

const EventsCarousel = () => {
    return (
        <Carousel
        showArrows={true}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        autoPlay={true}
        interval={3000}
        >
            <div className="myCarousel">
                <img src={forfre} alt="Formal Freshers" />
                <div className="carousel-content">
                     <h1>Formal Freshers</h1>
                    <p>It is an official introductory of 1st yearites with the seniors and faculty. It provides a stage for freshers to give their talent a new dimension and explore new horizons.</p>
                </div>
            </div>
            <div className="myCarousel">
                <img src={indvis} alt="Industrial Visit" />
                <div className="carousel-content">
                     <h1>Industrial Visit</h1>
                    <p>Industrial trip helps students in getting an exposure to the  environment of industries like HLL, HMT , maruti etc. These visits bridge the widening gap between theoretical learning and practical exposure.</p>
                </div>
            </div>
            <div className="myCarousel">
                <img src={indvis} alt="Industrial Visit" />
                <div className="carousel-content">
                     <h1>Industrial Visit</h1>
                    <p>Industrial trip helps students in getting an exposure to the  environment of industries like HLL, HMT , maruti etc. These visits bridge the widening gap between theoretical learning and practical exposure.</p>
                </div>
            </div>
            <div className="myCarousel">
                <img src={indvis} alt="Industrial Visit" />
                <div className="carousel-content">
                     <h1>Industrial Visit</h1>
                    <p>Industrial trip helps students in getting an exposure to the  environment of industries like HLL, HMT , maruti etc. These visits bridge the widening gap between theoretical learning and practical exposure.</p>
                </div>
            </div>
        </Carousel>
    )
}

export default EventsCarousel
