import React from 'react';
import {Link, NavLink} from "react-router-dom";
import {BOOKINGS_ROUTE, CATALOG_ROUTE, DISCOUNTS_ROUTE} from "../consts";
import Logo from '../../public/images/albatros-without-background.png';

const NavBar = () => {
    return (
        <div className='navBar'>
            <Link className="nav-link" to={CATALOG_ROUTE}>
                <img style={{height: 'calc(3rem + 8px)', marginTop: '4px'}} src={Logo}/>
            </Link>
            <div className="link-group">
                <Link className="nav-link" to={CATALOG_ROUTE}>CATALOG</Link>
                <Link className="nav-link" to={BOOKINGS_ROUTE}>BOOKINGS</Link>
                <Link className="nav-link" to={DISCOUNTS_ROUTE}>DISCOUNTS</Link>
            </div>
            <button className='btn-flip'>Выйти</button>
        </div>
    );
};

export default NavBar;