import React, {Component} from 'react';
import {Link, Route, Routes} from "react-router-dom";
import Catalog from "./components/Catalog";
import Bookings from "./components/Bookings";
import Discounts from "./components/Discounts";
import NotFoundPage from "./components/NotFoundPage";

class App extends Component {
    render() {
        return (
            <>
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
            </>
        );
    }
}

export default App;