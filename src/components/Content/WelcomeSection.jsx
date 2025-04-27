import React from 'react';
import Important_dates from './event_sidebar/important_dates';
import SubmissionBox from './event_sidebar/submission_box';
import ImageComponent from './event_sidebar/image';

import './WelcomeSection.css';


function WelcomeSection() {
    return (
        <div className="event-container">
            <div className="event-main">
                <h1>Welcome to JURSE 2025!</h1>
                <h2 >4-7 May 2025, Gammarth-Tunis, Tunisia</h2>
                <h3 className="highlight">Shaping Sustainable Cities</h3>
                <p>
                    The <span className="highlight_text">Joint Urban Remote Sensing Event (JURSE)</span> is a forum of excellence where researchers, practitioners, and students present, share, and discuss their latest findings and results.
                </p>
                <p>
                    The <span className="highlight_text2">17th International Conference on Joint Urban Remote Sensing (JURSE 2025)</span> , hosted by the Higher School of Communication of Tunis (SUPCOM) from May 4 to 7, 2025, in Tunisia, invites you to engage in discussions on the future of sustainable urban development. As the first JURSE edition to be held in Africa, this event will bring together leading researchers, professionals, policymakers from around the world to share insights, present cutting-edge innovations, and address the pressing challenges facing our cities. JURSE 2025 is proudly <span className="highlight_text2">technically co-sponsored</span>  by the <span className="highlight_text2">IEEE Geoscience and Remote Sensing Society (GRSS)</span>
                </p>
                <p>
                    JURSE 2025 focuses on exploring innovative applications of Joint Urban Remote Sensing and Earth Observation in building resilient and thriving urban centers. The conference delves into the cutting-edge research and explores how these technologies can contribute to achieving the UN Sustainable Development Goals (SDGs).
                </p>
                <p>
                    We look forward to welcoming you to Tunis and shaping together the future of sustainable cities!
                </p>
            </div>
            <div className="event-sidebar">
                <SubmissionBox />
                <Important_dates />
                <ImageComponent />
            </div>
        </div>

    )
}

export default WelcomeSection;