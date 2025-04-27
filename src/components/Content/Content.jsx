import React from 'react';
import WelcomeSection from './WelcomeSection';
import Carousel from './carousel';
import './Content.css';
import Contributors from './Contributors';



const Content = () => {
    return (
        <main>
            <Carousel />
            <WelcomeSection />
            <Contributors />
        </main>
    );
};

export default Content;
