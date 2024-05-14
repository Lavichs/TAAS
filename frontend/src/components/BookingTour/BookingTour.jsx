import React, {useContext, useState} from 'react';
import cl from './BookingTour.module.css'
import BookingService from "../../API/BookingService";
import {AuthContext} from "../../context";
import MyInput from "../MyInput/MyInput";
import Tooltip from "../Tooltip/Tooltip";

const BookingTour = ({setVisible, tourId, tourPrice}) => {
    const [data, setData] = useState({});
    const {token} = useContext(AuthContext);

    const submit = e => {
        e.preventDefault()
        BookingService.create(data, token)
    }
    const updateData = e => {
        setData({
            tourId,
            tourPrice,
            ...data,
            [e.target.name]: e.target.value
        })
        console.log(data)
    }

    return (
        <div className={cl.tourCard}>
            <form onSubmit={submit} onChange={updateData}>
                <h1>Регистрация брони</h1>
                <h4 style={{marginTop: 20}}>Данные о клиенте</h4>
                <div className={cl.inputBox}>
                    <MyInput name="surname" placeholder='Фамилия' myType='fio'/>
                    <Tooltip>Допускаются только символы кириллицы и дефис</Tooltip>
                    <MyInput name="name" placeholder='Имя' myType='fio'/>
                    <Tooltip>Допускаются только символы кириллицы и дефис</Tooltip>
                </div>
                <div className={cl.inputBox}>
                    <MyInput name="patronymic" placeholder='Отчество' myType='fio'/>
                    <Tooltip>Допускаются только символы кириллицы и дефис</Tooltip>
                    <MyInput name="seriesPassport" placeholder='Серия паспорта' myType='pasportSeries'/>
                    <Tooltip>Строка вида '1111'</Tooltip>
                </div>
                <div className={cl.inputBox}>
                    <MyInput name="numberPassport" placeholder='Номер паспорта' myType='pasportNumber'/>
                    <Tooltip>Строка вида '111111'</Tooltip>
                </div>
                <h4 style={{marginTop: 20}}>Контакты</h4>
                <div className={cl.inputBox}>
                    <MyInput name="tel" placeholder='Номер телефона' myType='tel'/>
                    <MyInput name="email" placeholder='Почта' myType='email'/>
                </div>
                <button className={[cl.myBtn, cl.btnSubmit].join(' ')} onClick={() => {
                    setVisible(false)
                }}>
                    Сохранить
                </button>
                <button className={[cl.myBtn, cl.btnCancel].join(' ')} type='reset' onClick={() => {
                    setVisible(false)
                }}>
                    Отменить
                </button>
            </form>
        </div>
    );
};

export default BookingTour;