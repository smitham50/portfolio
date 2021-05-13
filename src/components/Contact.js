import React from 'react';
import '../component-stylesheets/Contact.css';

const Contact = () => {
    return (
        <div className="contact">
            <img src={process.env.PUBLIC_URL + "Profile.jpg"} alt="" />
            <h2>Aaron Smith</h2>
            <a href="https://www.linkedin.com/in/aaron-smith-830254192/" className="contact-link"><img className="contact-icon" src={process.env.PUBLIC_URL + "icons8-linkedin.svg"} alt="" /></a>
            <a href="https://github.com/smitham50" className="contact-link"><img className="contact-icon" src={process.env.PUBLIC_URL + "icons8-github.svg"} alt="" /></a>
            <a href="https://smitham50.medium.com/" className="contact-link"><img className="contact-icon" src={process.env.PUBLIC_URL + "icons8-medium-monogram.svg"} alt="" /></a>
            <a href="mailto: smitham50@gmail.com" className="contact-link"><img className="contact-icon" src={process.env.PUBLIC_URL + "icons8-gmail.svg"} alt="" /></a>
        </div>
    );
}

export default Contact;
