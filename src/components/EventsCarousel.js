import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import indvis from '../assets/industrial_visit.png';
import forfre from '../assets/formal.png';
import platal from '../assets/placemnet_talk.png';
import guest from '../assets/guest.png';
import workshop from '../assets/workshop.png';
import internt from '../assets/interntalk.png';
import internb from '../assets/internb.png';
import mit from '../assets/makeithap.png';
import mecholy from '../assets/mecholy.png';

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
                <img src={indvis} alt="Industrial Visit" />
                <div className="carousel-content">
                     <h3>Industrial Trip</h3>
                    <p>Industrial trip helps students in getting an exposure to the  environment of industries like HLL, HMT , maruti etc. These visits bridge the widening gap between theoretical learning and practical exposure.</p>
                </div>
            </div>
            <div className="myCarousel">
                <img src={forfre} alt="Formal Freshers" />
                <div className="carousel-content">
                     <h3>Formal Freshers</h3>
                    <p>It is an official introductory of 1st yearites with the seniors and faculty. It provides a stage for freshers to give their talent a new dimension and explore new horizons.</p>
                </div>
            </div>
            <div className="myCarousel">
                <img src={platal} alt="Placement Talk" />
                <div className="carousel-content">
                     <h3>Placement Talk</h3>
                    <p>Talking to alums and immediate seniors acts as a guide for students and help them prepare for placements.</p>
                </div>
            </div>
            <div className="myCarousel">
                <img src={guest} alt="Guest Lectures" />
                <div className="carousel-content">
                     <h3>Guest Lectures</h3>
                    <p>Guest lectures enable students to interact with professional. It helps students know the perspective of guest lecturer's specific field.</p>
                </div>
            </div>
            <div className="myCarousel">
                <img src={workshop} alt="Workshops" />
                <div className="carousel-content">
                     <h3>Workshops</h3>
                    <p>It provides a platform for students to learn, explore and promote innovation.</p>
                </div>
            </div>
            <div className="myCarousel">
                <img src={internt} alt="Internship Talk" />
                <div className="carousel-content">
                     <h3>Internship Talk</h3>
                    <p>Internships helps students gain experience and increase networking. These talks are organised for students to help them gain details about internship.</p>
                </div>
            </div>
            <div className="myCarousel">
                <img src={internb} alt="Internship Booklet" />
                <div className="carousel-content">
                     <h3>Internship Booklet</h3>
                    <p>Internship booklet is provided to junior students so that they can understand intern responsibility and expectations. All the frequently asked questions are answered in the booklet.</p>
                </div>
            </div>
            <div className="myCarousel">
                <img src={mit} alt="Make it happen" />
                <div className="carousel-content">
                     <h3>Make it happen</h3>
                    <p>It is a Communication Development Training Program that aims to develop and pioneer an unique platform to help all our MIED students enhance both their interpersonal and public communication skills.</p>
                </div>
            </div>
            <div className="myCarousel">
                <img src={mecholy} alt="Mecholympia" />
                <div className="carousel-content">
                     <h3>Mecholympia</h3>
                    <p>It is the annual sports extravaganza of MIED which gives an opportunity to all the students and faculty members to interact through sports like chess, volleyball, billiards,etc.</p>
                </div>
            </div>
        </Carousel>
    )
}

export default EventsCarousel
