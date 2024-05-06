import React, {useRef, useState} from 'react';
import cl from './BookingDescription.module.css'
import {BOOKING_STATUSES, PAY_METHODS} from "../../consts";
import BookingService from "../../API/BookingService";

const BookingDescription = ({currentBooking, setVisible, fetchBookings}) => {
    const [isChanging, setIsChanging] = useState(false)
    const statusSelect = useRef(null)
    const methodSelect = useRef(null)

    if (!currentBooking) {
        return <></>
    }

    async function changeBooking(event, ...props) {
        const s = statusSelect.current;
        const status = s.options[s.selectedIndex].text;
        const m = methodSelect.current;
        const payMethod = m.options[m.selectedIndex].text;
        const response = await BookingService.update(currentBooking.id, status, payMethod)

        setVisible(false)
        setIsChanging(false)
        fetchBookings()
    }

    function formatDateRange(date1Str, date2Str) {
        const months = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня',
            'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];

        const date1 = new Date(date1Str);
        const date2 = new Date(date2Str);

        if (date1.getMonth() !== date2.getMonth()) {
            const startDate = date1.getDate();
            const startMonth = months[date1.getMonth()];
            const endDate = date2.getDate();
            const endMonth = months[date2.getMonth()];
            const year = date1.getFullYear();

            return `${startDate} ${startMonth} - ${endDate} ${endMonth} ${year}`;
        } else {
            const startDate = date1.getDate();
            const endDate = date2.getDate();
            const month = months[date1.getMonth()];
            const year = date1.getFullYear();

            return `${startDate}-${endDate} ${month} ${year}`;
        }
    }

    function returnFIO(surname, name, patronimyc) {
        return surname + ' ' + name[0] + '.' + patronimyc[0] + '.'
    }

    return (
        <div className={cl.tourCard}>
            <h2>Страна: {currentBooking.country}</h2>
            <p>Откуда: {currentBooking.cityFrom}</p>
            <p>Куда: {currentBooking.cityTo}</p>
            <p>Даты: {formatDateRange(currentBooking.date1, currentBooking.date2)}</p>
            <p>Цена: {currentBooking.cost}₽₽</p>
            <p>Статус: <span className={cl.status}>Забронировано. {currentBooking.status}</span></p>
            <p>Клиент: {returnFIO(currentBooking.surnameClient, currentBooking.nameClient, currentBooking.patronymicClient)}</p>
            <p>Сотрудник: {returnFIO(currentBooking.surnameEmployee, currentBooking.nameEmployee, currentBooking.patronymicEmployee)}</p>
            <button className={cl.changeStatus} onClick={() => setIsChanging(!isChanging)}>Изменить статус</button>
            {isChanging &&
                <div className={cl.inputBox}>
                    <select ref={statusSelect} className={cl.mySelect} name='status'>
                        <option disabled>Выберите статус</option>
                        {BOOKING_STATUSES.map((status, index) =>
                            <option key={index}>{status}</option>
                        )}
                    </select>
                    <select ref={methodSelect} className={cl.mySelect} name='payMethod'>
                        <option disabled>Выберите метод</option>
                        {PAY_METHODS.map((method, index) =>
                            <option key={index}>{method}</option>
                        )}
                    </select>
                    <div>
                        <button className={[cl.myBtn, cl.btnSubmit].join(' ')} onClick={changeBooking}>
                            Сохранить
                        </button>
                        <button className={[cl.myBtn, cl.btnCancel].join(' ')} onClick={() => {
                            setVisible(false)
                            setIsChanging(false)
                        }}>
                            Отменить
                        </button>
                    </div>
                </div>
            }
        </div>
    );
};

export default BookingDescription;