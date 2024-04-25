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
        const response = await BookingService.update(status, payMethod)
        console.log(response);

        setVisible(false)
        setIsChanging(false)
        fetchBookings()
    }

    return (
        <div className={cl.tourCard}>
            <h2>Страна: Италия</h2>
            <p>Откуда: Москва</p>
            <p>Куда: Рим</p>
            <p>Даты: 20-25 сентября 2022</p>
            <p>Цена: $1000</p>
            <p>Статус: <span className={cl.status}>Забронировано</span></p>
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



        // <div className={cl.booking_container}>
        //     <h2>{currentBooking.country}</h2>
        //     <h4></h4>
        //     <div className={cl.bookingDesc}>
        //         <p>
        //             Дата отправления: дата1
        //         </p>
        //         <p>
        //             Дата отправления: дата2
        //         </p>
        //         <p>
        //             Туроператор
        //         </p>
        //         <p>
        //             Цена
        //         </p>
        //     </div>
        // </div>
    );
};

export default BookingDescription;