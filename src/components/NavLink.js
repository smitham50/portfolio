import React from 'react';
import { Link } from 'react-router-dom';

const NavLink = (props) => {
    const { linkTo } = props;

    return (
        <div className="nav-link">
            <Link to="#">{linkTo}</Link>
        </div>
    );
}

export default NavLink;
