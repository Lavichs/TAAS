import React, {useContext} from 'react';
import cl from './TourDescription.module.css';
import MyButton from "../Button/MyButton";
import {AuthContext} from "../../context";
import {differenceDate, formatDateRange} from "../../utils/dates";

const TourDescription = ({currentTour, toBook, removeTour}) => {
    const {token, setToken, role, setRole} = useContext(AuthContext)
    const newPrice = currentTour.discount ? currentTour.price * ((100 - currentTour.discount) / 100) : currentTour.price;
    if (!currentTour) {
        return <h1>Тур не выбран</h1>
    }


    return (
        <div className={cl.tourCard}>
            <h2>{currentTour.country}</h2>
            <p>Даты: {formatDateRange(currentTour.date1, currentTour.date2)}</p>
            <p>Продолжительность: {differenceDate(currentTour.date1, currentTour.date2)} дня(-ей)</p>
            <p>Цена: {currentTour.discount ? <del>{currentTour.price}</del> : <></>} {newPrice}₽</p>

            <p>{currentTour.description}</p>
            <div className={cl.buttonsBlock}>
                <button className={cl.toBook} onClick={toBook}>Забронировать</button>
                {token && role === 'admin' &&
                    <>
                        <MyButton type='remove' onClick={() => removeTour(currentTour)}>Удалить</MyButton>
                    </>
                }
            </div>

        </div>
    );
};

export default TourDescription;