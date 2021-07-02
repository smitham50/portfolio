import React from 'react';
import styled from 'styled-components';

const ContactContainer = styled.div`
    width: auto;
    margin: 1rem;
    color: #3f3e42;
    @media screen and (max-width: 1000px) {
        width: auto;
        text-align: center;
    }
`;

const Portrait = styled.img`
    width: 100%;
    border-radius: 20px;
    @media screen and (max-width: 1000px) {
        width: 50%;
    }
`;

const ContactLink = styled.a`
    margin: 0 0.15rem;
    width: 2rem;
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
            <Portrait src={process.env.PUBLIC_URL + "Profile.jpg"} alt="" />
            <h2>Aaron Smith</h2>
            <ContactLink href="https://www.linkedin.com/in/aaron-smith-830254192/">
                <ContactIcon src={process.env.PUBLIC_URL + "icons8-linkedin.svg"} alt="" />
            </ContactLink>
            <ContactLink href="https://github.com/smitham50">
                <ContactIcon src={process.env.PUBLIC_URL + "icons8-github.svg"} alt="" />
            </ContactLink>
            <ContactLink href="https://smitham50.medium.com/">
                <ContactIcon src={process.env.PUBLIC_URL + "icons8-medium-monogram.svg"} alt="" />
            </ContactLink>
            <ContactLink href="mailto: smitham50@gmail.com">
                <ContactIcon src={process.env.PUBLIC_URL + "icons8-gmail.svg"} alt="" />
            </ContactLink>
        </ContactContainer>
    );
}

export default Contact;
