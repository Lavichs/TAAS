import React, {useContext} from 'react';
import {Link, NavLink, useNavigate} from "react-router-dom";
import {AUTHORIZATION_ROUT, BOOKINGS_ROUTE, CATALOG_ROUTE, DISCOUNTS_ROUTE, MAIN_ROUTE} from "../consts";
import Logo from '../../public/images/albatros-without-background-2.png';
import {AuthContext} from "../context";

const NavBar = () => {
    const {token, setToken, role, setRole} = useContext(AuthContext)
    const navigate = useNavigate()

    return (
        <div className='navBar'>
            <Link className="nav-link" to={MAIN_ROUTE}>
                <img style={{height: 'calc(3rem + 8px)', marginTop: '4px'}} src={Logo}/>
            </Link>
            <div className="link-group">
                {token &&
                    <>
                        <Link className="nav-link" to={CATALOG_ROUTE}>CATALOG</Link>
                        <Link className="nav-link" to={BOOKINGS_ROUTE}>BOOKINGS</Link>
                    </>
                }

                {/*<Link className="nav-link" to={DISCOUNTS_ROUTE}>DISCOUNTS</Link>*/}
                {/*<Link className="nav-link" to={AUTHORIZATION_ROUT}>AUTH</Link>*/}
            </div>
            {token
                ?
                <button className='btn-flip' onClick={() => {
                    setToken(null);
                    setRole('');
                    navigate(MAIN_ROUTE)
                }}
                >Выйти</button>
                :
                <button className='btn-flip' onClick={() => {
                    navigate(AUTHORIZATION_ROUT)
                }}
                >Войти</button>
            }
        </div>
    );
};

export default NavBar;