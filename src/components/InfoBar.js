import React, { Fragment } from 'react';
import About from './About';
import Contact from './Contact';

const InfoBar = (props) => {
    return (
        <div className="infobar">
            <Contact />
            <About />
        </div>
    );
}

export default InfoBar;
