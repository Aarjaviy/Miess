import React from "react";
import './Navbar.css'
import {Link} from "react-scroll";
import logo from '../assets/miess_logo.png'
// REACT FONT AWESOME IMPORTS
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg fixed-top">
            <div className="container">
                <a className="navbar-brand" href="#"><img className="logo" src={logo} alt="logo..." /></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <FontAwesomeIcon icon={faBars} style={{color: "#000000"}}/>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link smooth={true} duration={100} to="welcome" className="nav-link" href="#" data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show">Home <span className="sr-only"></span></Link>
                        </li>
                        <li className="nav-item">
                            <Link smooth={true} duration={100} to="about" offset={-110} className="nav-link" href="#" data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show">About Us</Link>
                        </li>
                        <li className="nav-item">
                            <Link smooth={true} duration={100} to="events" offset={-110} className="nav-link" href="#" data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show">Events</Link>
                        </li>
                        <li className="nav-item">
                            <Link smooth={true} duration={100} to="team" offset={-110} className="nav-link" href="#" data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show">Team</Link>
                        </li>
                        <li className="nav-item">
                            <Link smooth={true} duration={100} to="gallery" offset={-110} className="nav-link" href="#" data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show">Gallery</Link>
                        </li>
                        <li className="nav-item">
                            <Link smooth={true} duration={100} to="contact" offset={-110} className="nav-link" href="#" data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show">Contact</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
