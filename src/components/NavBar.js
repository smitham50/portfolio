import React from 'react';
import { Link } from 'react-router-dom';
import { Nav } from '../styled/NavBarStyled';

const NavBar = () => {
   return (
      <Nav>
         <Link to='/about'>
            <p>About</p>
         </Link>
         <Link to='/projects'>
            <p>Projects</p>
         </Link>
      </Nav>
   );
};

export default NavBar;

