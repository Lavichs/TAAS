import React, {Component, useState} from 'react';
import {Link, Route, Routes} from "react-router-dom";
import './style/App.scss';
import './style/item_button.scss'
import NavBar from "./components/NavBar";
import {adminRoutes, privateRoutes, publicRoutes} from "./router/routes";
import Catalog from "./pages/Catalog";
import {CATALOG_ROUTE} from "./consts";
import {AuthContext} from "./context";

function App() {
    const [token, setToken] = useState(null)
    const [role, setRole] = useState('')

    return (
        <>
            <AuthContext.Provider value={{
                token,
                setToken,
                role,
                setRole
            }}>
                <NavBar/>
                <div className='App'>
                    <Routes>
                        {token && privateRoutes.map(({path, Component}) =>
                            <Route key={path} path={path} element={<Component/>}/>
                        )}
                        {token && role === 'admin' && adminRoutes.map(({path, Component}) =>
                            <Route key={path} path={path} element={<Component/>}/>
                        )}
                        {publicRoutes.map(({path, Component}) =>
                            <Route key={path} path={path} element={<Component/>}/>
                        )}
                        {/*<Route path={CATALOG_ROUTE} element={<Catalog/>}/>*/}
                    </Routes>
                </div>
            </AuthContext.Provider>
        </>
    );

}

export default App;



