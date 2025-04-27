import React from 'react';
import './Header.css';

const NavbarDropdown = ({ isMobile, open }) => {
    return (
        <div className={`dropdown-content${isMobile && open ? ' open' : ''}`}>
            <a href="#">KEYNOTES</a>
            <a href="#">TOPICS</a>
            <a href="#">TECHNICAL TUTORIALS</a>
            <a href="#">STUDENT CONTEST</a>
            <a href="#">EXHIBITORS</a>
        </div>
    );
};

export default NavbarDropdown;
