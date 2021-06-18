import React from 'react';
import About from './About';
import Contact from './Contact';
import styled from 'styled-components';
import '../component-stylesheets/InfoBar.css';

const InfoContainer = styled.div`
    padding: 1rem;
    margin: 1rem;
    background: #f9f9f9ad;
    border-radius: 10px;
    display: flex;
    height: 80vh;
    @media screen and (max-width: 768px) {
        flex-direction: column;
        padding: 0;
        height: auto;
    }
`;

const InfoBar = () => {
    return (
        <InfoContainer>
            <Contact />
            <About />
        </InfoContainer>
    );
}

export default InfoBar;
