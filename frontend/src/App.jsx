import React, {Component} from 'react';
import {Link, Route, Routes} from "react-router-dom";
import Catalog from "./pages/Catalog";
import Bookings from "./pages/Bookings";
import Discounts from "./pages/Discounts";
import NotFoundPage from "./pages/NotFoundPage";
import './style/App.css';
import './style/item_button.scss'
import NavBar from "./components/NavBar";
import {BOOKINGS_ROUTE, CATALOG_ROUTE, DISCOUNTS_ROUTE} from "./consts";

function App() {
    return (
        <>
            <NavBar/>
            <div className='App'>
                <Routes>
                    <Route path={CATALOG_ROUTE} element={<Catalog/>}/>
                    <Route path={BOOKINGS_ROUTE} element={<Bookings/>}/>
                    <Route path={DISCOUNTS_ROUTE} element={<Discounts/>}/>
                    <Route path='*' element={<NotFoundPage/>}/>
                </Routes>
            </div>
        </>
    );

}

export default App;



