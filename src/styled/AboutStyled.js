import styled from "styled-components";

export const AboutContainer = styled.div`
  display: block;
  margin: 1rem;
  background: #a5a5a514;
  border-radius: 10px;
  padding: 0 1rem;
  padding-bottom: 4rem;
  margin: 1rem;
  color: #3f3e42;
  line-height: 1.4rem;

  @media screen and (max-width: 1000px) {
    padding-bottom: 1rem;
    line-height: 1.8rem;
  }
`;

export const Heading = styled.h1`
  letter-spacing: 0.1rem;
`;

export const P = styled.p`
  color: #3f3e42;
`;
