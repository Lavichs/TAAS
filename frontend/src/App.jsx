import React, {Component} from 'react';
import {Link, Route, Routes} from "react-router-dom";
import Catalog from "./pages/Catalog";
import Bookings from "./pages/Bookings";
import Discounts from "./pages/Discounts";
import NotFoundPage from "./pages/NotFoundPage";

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