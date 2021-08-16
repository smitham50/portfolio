import styled from "styled-components";

export const Nav = styled.nav`
  display: flex;
  background: #11111399;
  justify-content: space-around;
  padding: 0.5rem;

  & a:-webkit-any-link {
    color: white;
    text-decoration: none;
    font-size: 1.4rem;
    transition: 0.3s;
  }
`;
