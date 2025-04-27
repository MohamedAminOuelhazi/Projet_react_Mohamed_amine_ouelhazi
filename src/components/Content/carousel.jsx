import React, { useState, useEffect } from 'react'

import { ArrowRight, ArrowLeft } from 'lucide-react';



function Carousel() {

    const [currentIndex, setCurrentIndex] = useState(0);
    const images = [
        { src: "assets/asset 2.jpeg", caption: "Sidi Bousaid, Tunisia" },
        {
            src: "assets/asset 3.jpeg", caption: "Panoramic view of ancient Carthage, Tunis"
        },
        { src: "assets/asset 4.jpeg", caption: "Satellite night view of the Mediterranean countries, by NASA" },
        { src: "assets/asset 5.jpeg", caption: "City of Culture, Tunis" },
        { src: "assets/asset 6.jpeg", caption: "Enjoy your summer holiday in Tunisia" },
        { src: "assets/asset 7.jpeg", caption: "National Bardo Museum presents to you an impressive and unique collection of the ancient art" },
        { src: "assets/asset 8.jpeg", caption: "I love Tunis and Ibn Khaldūn Status (1332-1406)" },
        { src: "assets/asset 9.jpeg", caption: "City Center of Tunis" },
        { src: "assets/asset 10.jpeg", caption: "Star Wars movie was here, South of Tunisia" },
        { src: "assets/asset 11.jpeg", caption: "Amphitheatre of El Jem, UNESCO World Heritage Centre" },

    ];

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    const goToSlide = (index) => {
        setCurrentIndex(index);
    };

    useEffect(() => {
        const interval = setInterval(nextSlide, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div >
            <div className="carousel-container">
                <div className="carousel" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                    {images.map((image, index) => (
                        <img key={index} src={image.src} alt={`Slide ${index + 1}`} />
                    ))}
                </div>
                <ArrowLeft className="arrow left" onClick={prevSlide} />
                <ArrowRight className="arrow right" onClick={nextSlide} />
                <div className="caption">{images[currentIndex].caption}</div>
            </div>
            <div className="dots">
                {images.map((_, index) => (
                    <div
                        key={index}
                        className={`dot ${index === currentIndex ? 'active' : ''}`}
                        onClick={() => goToSlide(index)}
                    ></div>
                ))}
            </div>
        </div>
    );
};


export default Carousel