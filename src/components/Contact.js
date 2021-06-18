import React from 'react';
import '../component-stylesheets/Contact.css';
import styled from 'styled-components';

const ContactContainer = styled.div`
    width: auto;
`;

const ContactLink = styled.a`
    margin: 0 0.15rem;
`;

const ContactIcon = styled.img`
    transition: 300ms;

    &:hover {
        transform: scale(1.1);
    }
`;

const Contact = () => {
    return (
        <ContactContainer>
            <img src={process.env.PUBLIC_URL + "Profile.jpg"} alt="" />
            <h2>Aaron Smith</h2>
            <ContactLink href="https://www.linkedin.com/in/aaron-smith-830254192/">
                <ContactIcon className="contact-icon" src={process.env.PUBLIC_URL + "icons8-linkedin.svg"} alt="" />
            </ContactLink>
            <ContactLink href="https://github.com/smitham50">
                <ContactIcon className="contact-icon" src={process.env.PUBLIC_URL + "icons8-github.svg"} alt="" />
            </ContactLink>
            <ContactLink href="https://smitham50.medium.com/">
                <ContactIcon className="contact-icon" src={process.env.PUBLIC_URL + "icons8-medium-monogram.svg"} alt="" />
            </ContactLink>
            <ContactLink href="mailto: smitham50@gmail.com">
                <ContactIcon className="contact-icon" src={process.env.PUBLIC_URL + "icons8-gmail.svg"} alt="" />
            </ContactLink>
        </ContactContainer>
    );
}

export default Contact;
