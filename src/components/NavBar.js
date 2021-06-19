import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
    display: flex;
    background: #11111399;
    justify-content: space-around;
    height: 6rem;
    padding: 1rem;

    & a:-webkit-any-link {
        color: white;
        text-decoration: none;
        font-size: 1.4rem;
        transition: .3s;
    }
`;

const NavBar = () => {
    return (
        <Nav>
            <Link to='/about'>
                <p>{"About"}</p>
            </Link>
            <Link to='/skills'>
                <p>{"Skills"}</p>
            </Link>
            <Link to='/projects'>
                <p>{"Projects"}</p>
            </Link>
        </Nav>
    );
};

export default NavBar;

