import React from 'react';
import styled from 'styled-components';

const LandingContainer = styled.div`
    background: #11111399;
    color: white;
    height: 87vh;
    position: relative;
`;

const Introduction = styled.div`
    position: absolute;
    top: 30%;
    left: 13%;
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);

    & h1, h3 {
        margin: 1rem;
    }

    @media screen and (max-width: 768px) {
        left: 9%;
    }
`;

const Landing = () => {
    return (
        <LandingContainer>
            <Introduction>
                <h3>Hi, I'm Aaron!</h3>
                <h1>Full Stack Web Developer, React, Ruby on Rails, NodeJS</h1>
            </Introduction>
        </LandingContainer>
    );
}

export default Landing;
