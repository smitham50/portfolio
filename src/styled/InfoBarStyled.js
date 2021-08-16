import styled from "styled-components";

export const InfoContainer = styled.div`
  padding: 1rem;
  margin: 1rem;
  background: #f9f9f9ad;
  border-radius: 10px;
  display: flex;
  height: 78vh;
  @media screen and (max-width: 1000px) {
    flex-direction: column;
    padding: 0;
    height: auto;
  }
`;
