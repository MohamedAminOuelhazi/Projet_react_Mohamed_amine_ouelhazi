import React from 'react';
import TopBar from './TopBar';
import LogoSection from './LogoSection';
import Navbar from './Navbar';


function Header() {
    return (
        <header>
            <TopBar />
            <LogoSection />
            <Navbar />
        </header>
    )
}

export default Header;
