import React from 'react';
import '../component-stylesheets/Contact.css';

const Contact = () => {
    return (
        <div className="contact">
            <img src="Profile.jpg" alt="" />
            <h2>Aaron Smith</h2>
            <p>smitham50@gmail.com</p>
            <p>917-671-7718</p>
            <a href="https://www.linkedin.com/in/aaron-smith-830254192/"><img className="contact-icon" src="icons8-linkedin.svg" alt="" /></a>
            <a href="https://github.com/smitham50"><img className="contact-icon" src="icons8-github.svg" alt="" /></a>
            <a href="https://smitham50.medium.com/"><img className="contact-icon" src="icons8-medium-monogram.svg" alt="" /></a>
        </div>
    );
}

export default Contact;
