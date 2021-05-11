import React from 'react';
import NavLink from './NavLink';
import '../component-stylesheets/NavBar.css';

const NavBar = (props) => {
    return (
        <nav className="navbar">
            <NavLink linkTo={"About"}/>
            <NavLink linkTo={"Skills"}/>
            <NavLink linkTo={"Projects"}/>
            <NavLink linkTo={"Learning"}/>
        </nav>
    );
};

export default NavBar;

