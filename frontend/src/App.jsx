import React, {Component} from 'react';
import {Link, Route, Routes} from "react-router-dom";
import './style/App.scss';
import './style/item_button.scss'
import NavBar from "./components/NavBar";
import {privateRoutes} from "./router/routes";
import Catalog from "./pages/Catalog";
import {CATALOG_ROUTE} from "./consts";

function App() {
    return (
        <>
            <NavBar/>
            <div className='App'>
                <Routes>
                    {privateRoutes.map(({path, Component}) =>
                        <Route key={path} path={path} element={<Component/>}/>
                    )}
                    {/*<Route path={CATALOG_ROUTE} element={<Catalog/>}/>*/}
                </Routes>
            </div>
        </>
    );

}

export default App;



