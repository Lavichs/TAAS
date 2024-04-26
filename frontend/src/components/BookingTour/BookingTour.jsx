import React, {useState} from 'react';
import cl from './BookingTour.module.css'
import BookingService from "../../API/BookingService";

const BookingTour = ({setVisible, tourId}) => {
    const [data, setData] = useState({})

    const submit = e => {
        e.preventDefault()
        console.log(data)
        BookingService.create(data)
    }
    const updateData = e => {
        setData({
            tourId,
            ...data,
            [e.target.name]: e.target.value
        })
        console.log({
            tourId,
            ...data,
            [e.target.name]: e.target.value
        })
    }

    return (
        <div className={cl.tourCard}>
            <form onSubmit={submit} onChange={updateData}>
                <h1>Регистрация брони</h1>
                <div className={cl.inputBox}>
                    <h4>Данные о клиенте</h4>
                    <input name="surname" placeholder='Фамилия'/>
                    <input name="name" placeholder='Имя'/>
                    <input name="patronymic" placeholder='Отчество'/>
                    <input name="seriesPassport" placeholder='Серия паспорта'/>
                    <input name="numberPassport" placeholder='Номер паспорта'/>
                </div>
                <div className={cl.inputBox}>
                    <h4>Контакты</h4>
                    <input name="tel" placeholder='Номер телефона'/>
                    <input name="email" placeholder='Почта'/>
                </div>
                <button className={[cl.myBtn, cl.btnSubmit].join(' ')}>
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