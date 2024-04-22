import React, {Component} from 'react';
import {Link, Route, Routes} from "react-router-dom";
import Catalog from "./pages/Catalog";
import Bookings from "./pages/Bookings";
import Discounts from "./pages/Discounts";
import NotFoundPage from "./pages/NotFoundPage";
import './style/App.css';
import './style/item_button.scss'

function App() {
    return (
        <div className='App'>
            <div>
                <ul>
                    <li><Link to='/'>catalog</Link></li>
                    <li><Link to='/bookings'>booking</Link></li>
                    <li><Link to='/discounts'>discounts</Link></li>
                </ul>
            </div>
            HELLO WORLD!
            <Routes>
                <Route path='/' element={<Catalog/>}/>
                <Route path='/bookings' element={<Bookings/>}/>
                <Route path='/discounts' element={<Discounts/>}/>
                <Route path='*' element={<NotFoundPage/>}/>
            </Routes>
        </div>
    );

}

export default App;



