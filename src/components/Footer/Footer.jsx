import React from "react";
import "./Footer.css";

import { Facebook, Instagram, Globe, Twitter, Linkedin, Youtube, Share2 } from 'lucide-react';



const Footer = () => {
    return (
        <footer className="footer">
            <nav className="footer-nav">
                <a href="/">Home</a>
                <span>|</span>
                <a href="/sitemap">Sitemap</a>
                <span>|</span>
                <a href="/accessibility">Accessibility</a>
                <span>|</span>
                <a href="/nondiscrimination">Nondiscrimination Policy</a>
                <span>|</span>
                <a href="/ethics">IEEE Ethics Reporting</a>
                <span>|</span>
                <a href="/privacy">IEEE Privacy Policy</a>
                <span>|</span>
                <a href="/terms">Terms</a>
            </nav>
            <div className="footer-content">
                <div className="footer-text" >
                    <p>
                        © Copyright 2025 IEEE – All rights reserved. Use of this website signifies your agreement to the IEEE Terms and Conditions.
                        A public charity, IEEE is the world’s largest technical professional organization dedicated to advancing technology for the benefit of humanity.
                    </p>
                </div>
                <div className="footer-social">
                    <Globe />
                    <Twitter />
                    <Instagram />
                    <Facebook />
                    <Linkedin />
                    <Youtube />
                    <Share2 />
                </div>
            </div>
            <button
                className="back-to-top"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
                Back to Top
            </button>
        </footer>
    );
};

export default Footer;