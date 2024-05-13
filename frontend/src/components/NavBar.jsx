import React, {useContext} from 'react';
import {Link, NavLink, useNavigate} from "react-router-dom";
import {AUTHORIZATION_ROUT, BOOKINGS_ROUTE, CATALOG_ROUTE, DISCOUNTS_ROUTE, MAIN_ROUTE} from "../consts";
import Logo from '../../public/images/albatros-without-background-2.png';
import {AuthContext} from "../context";
import DocumentService from "../API/DocumentService";
import {API_REPORT, API_RESOURCE_TOURS} from "../API/constsURL";
import cl from './NavBar.module.css'
import {downloadDocxFile} from "../utils/docs";

const NavBar = () => {
    const {token, setToken, role, setRole} = useContext(AuthContext)
    const navigate = useNavigate()

    return (
        <div className='navBar'>
            {token &&
                <Link className="nav-link" to={MAIN_ROUTE}>
                    <img style={{height: 'calc(3rem + 8px)', marginTop: '4px'}} src={Logo}/>
                </Link>
            }
            <div className="link-group">
                {token &&
                    <>
                        <Link className="nav-link" to={CATALOG_ROUTE}>КАТАЛОГ</Link>
                        <Link className="nav-link" to={BOOKINGS_ROUTE}>БРОНИРОВАНИЯ</Link>
                    </>
                }
                {token && (role === 'admin' || role === 'менеджер') &&
                    <>
                        <button onClick={() => {downloadDocxFile(DocumentService.getReport, 'Отчёт_о_продажах')}} className={cl.btnReport}>Отчет о продажах</button>
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