import React from 'react';
import styled, { keyframes } from 'styled-components';

const fadeInLeft = keyframes`
    0% {
        opacity: 0;
        transform: translateX(-50px);
    }

    80% {
        transform: translateX(35px);
        opacity: .5;
    }

    100% {
        opacity: 1;
    }
`;

const fadeInRight = keyframes`
    0% {
        opacity: 0;
        transform: translateX(50px);
    }

    80% {
        transform: translateX(-35px);
        opacity: .5;
    }

    100% {
        opacity: 1;
    }
`;

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

const Name = styled.h3`
    animation: 1s ${fadeInLeft} ease-in;
`;

const Title = styled.h1`
    animation: 1s ${fadeInRight} ease-in;
`;

const Landing = () => {
    return (
        <LandingContainer>
            <Introduction>
                <Name>Hi, I'm Aaron!</Name>
                <Title>Full Stack Web Developer, React, Ruby on Rails, NodeJS</Title>
            </Introduction>
        </LandingContainer>
    );
}

export default Landing;
