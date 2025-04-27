import React, { useState, useEffect } from 'react';
import NavbarDropdown from './NavbarDropdown';
import './Header.css';

function Navbar() {


    return (
        <nav className="navbar">
            <a href="#">HOME</a>
            <a href="#">PARTICIPATION</a>
            <div className="dropdown">
                <a href="#">PRESENTATION</a>
                <NavbarDropdown />
            </div>
            <a href="#">COMMITTEES</a>
            <a href="#">SPONSORS</a>
            <a href="#">VENUE</a>
            <a href="#">VIDEOS & PHOTOS</a>
            <a href="#">SUMMER SCHOOL</a>
            <a href="#">PROGRAM AT A GLANCE</a>
        </nav>
    );
}


export default Navbar;


