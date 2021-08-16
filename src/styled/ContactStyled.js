import styled from "styled-components";

export const ContactContainer = styled.div`
  width: 79%;
  margin: 1rem;
  color: #3f3e42;
  @media screen and (max-width: 1000px) {
    width: auto;
    text-align: center;
  }
`;

export const Portrait = styled.img`
  width: 100%;
  border-radius: 20px;
  box-shadow: 0 0.75rem 2rem rgba(0, 0, 0, 0.2);

  @media screen and (max-width: 1000px) {
    width: 50%;
  }
`;

export const ContactLink = styled.a`
  width: 2rem;
  margin: 0 0.28rem;
`;

export const ContactIcon = styled.img`
  transition: 300ms;

  &:hover {
    transform: scale(1.1) translateY(-0.1rem);
  }
`;
