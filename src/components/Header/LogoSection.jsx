import React, { useState, useEffect } from 'react';
import './Header.css';
import NavbarDropdown from './NavbarDropdown';

import { Search } from 'lucide-react';

const LogoSection = () => {


    const [menuOpen, setMenuOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 1024);
    const [dropdownOpen, setDropdownOpen] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 1024);
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const handleHamburgerClick = () => {
        setMenuOpen(!menuOpen);
    };

    if (isMobile) {
        // Affiche le menu hamburger (bouton + menu déroulant)
        return (
            <>
                <div className="logo-section">
                    <div className="logo-left">
                        <button className="hamburger" onClick={handleHamburgerClick} aria-label="Toggle navigation">
                            &#9776;
                        </button>
                        <div className={`nav-links${menuOpen ? ' open' : ''}`}>
                            <a href="#">HOME</a>
                            <a href="#">PARTICIPATION</a>
                            <div className="dropdown">
                                <a href="#" onClick={e => { e.preventDefault(); setDropdownOpen(v => !v); }}>PRESENTATION</a>
                                <NavbarDropdown isMobile={isMobile} open={dropdownOpen} />
                            </div>
                            <a href="#">COMMITTEES</a>
                            <a href="#">SPONSORS</a>
                            <a href="#">VENUE</a>
                            <a href="#">VIDEOS & PHOTOS</a>
                            <a href="#">SUMMER SCHOOL</a>
                            <a href="#">PROGRAM AT A GLANCE</a>
                        </div>
                        <img src="assets/asset 0.webp" alt="Event Logo" className="event-logo" />
                    </div>
                    <div className="logo-right">
                        <button className="search-btn">
                            <Search className="search-icon" />
                        </button>
                        <img src="assets/asset 1.svg" alt="IEEE Logo" className="ieee-logo" />
                    </div>
                </div>

            </>

        );
    } else {

        return (
            <div className="logo-section">
                <div className="logo-left">
                    <img src="assets/asset 0.webp" alt="Event Logo" className="event-logo" />
                </div>
                <div className="logo-right">
                    <button className="search-btn">
                        <Search className="search-icon" />
                    </button>
                    <img src="assets/asset 1.svg" alt="IEEE Logo" className="ieee-logo" />
                </div>
            </div>
        );
    };
};

export default LogoSection;