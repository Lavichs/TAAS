import React, {useContext} from 'react';
import {Link, NavLink, useNavigate} from "react-router-dom";
import {AUTHORIZATION_ROUT, BOOKINGS_ROUTE, CATALOG_ROUTE, DISCOUNTS_ROUTE, MAIN_ROUTE} from "../consts";
import Logo from '../../public/images/albatros-without-background-2.png';
import {AuthContext} from "../context";
import DocumentService from "../API/DocumentService";
import {API_REPORT, API_RESOURCE_TOURS} from "../API/constsURL";

const NavBar = () => {
    const {token, setToken, role, setRole} = useContext(AuthContext)
    const navigate = useNavigate()

    const downloadDocxFile = async () => {
        try {
            const response = await DocumentService.getReport();
            const url = URL.createObjectURL(new Blob([response.data]));
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', 'downloaded_file.docx');
            document.body.appendChild(link);
            link.click();
            URL.revokeObjectURL(url);
        } catch (error) {
            console.error('Error downloading the Word file:', error);
        }
    };

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
                        <button onClick={downloadDocxFile}>Отчет о продажах</button>
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