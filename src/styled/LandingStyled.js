import styled, { keyframes } from "styled-components";

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

export const LandingContainer = styled.div`
  background: #11111399;
  color: white;
  height: 89vh;
  position: relative;
`;

export const Introduction = styled.div`
  position: absolute;
  top: 30%;
  left: 13%;
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);

  & h1,
  h3 {
    margin: 1rem;
  }

  @media screen and (max-width: 768px) {
    left: 9%;
  }
`;

export const Name = styled.h3`
  animation: 1s ${fadeInLeft} ease-in;
`;

export const Title = styled.h1`
  animation: 1s ${fadeInRight} ease-in;
`;
