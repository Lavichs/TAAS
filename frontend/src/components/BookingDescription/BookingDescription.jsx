import React, {useRef, useState} from 'react';
import cl from './BookingDescription.module.css'
import {BOOKING_STATUSES, PAY_METHODS} from "../../consts";
import BookingService from "../../API/BookingService";
import DocumentService from "../../API/DocumentService";
import {formatDateRange} from "../../utils/dates";
import {downloadDocxFile} from "../../utils/docs";

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

    function returnFIO(surname, name, patronimyc) {
        // return surname + ' ' + name[0] + '.' + patronimyc[0] + '.'
        return surname + ' ' + name + ' ' + patronimyc
    }

    // const downloadDocxFile = async (idBooking) => {
    //     try {
    //         const response = await DocumentService.getContract(idBooking);
    //         const url = URL.createObjectURL(new Blob([response.data]));
    //         const link = document.createElement('a');
    //         link.href = url;
    //         link.setAttribute('download', 'downloaded_file.docx');
    //         document.body.appendChild(link);
    //         link.click();
    //         URL.revokeObjectURL(url);
    //     } catch (error) {
    //         console.error('Error downloading the Word file:', error);
    //     }
    // };

    return (
        <div className={cl.tourCard}>
            <h2>Страна: {currentBooking.country}</h2>
            <p>Откуда: {currentBooking.cityFrom}</p>
            <p>Куда: {currentBooking.cityTo}</p>
            <p>Даты: {formatDateRange(currentBooking.date1, currentBooking.date2)}</p>
            <p>Цена: {currentBooking.cost}₽</p>
            <p>Статус: <span className={cl.status}>Забронировано. {currentBooking.status}</span></p>
            <p>Клиент: {returnFIO(currentBooking.surnameClient, currentBooking.nameClient, currentBooking.patronymicClient)}</p>
            <p>Сотрудник: {returnFIO(currentBooking.surnameEmployee, currentBooking.nameEmployee, currentBooking.patronymicEmployee)}</p>
            <div className={cl.buttonsBlock}>
                <button className={cl.changeStatus} onClick={() => setIsChanging(!isChanging)}>
                    Изменить статус
                </button>
                <button className={[cl.myBtn, cl.btnSpecial].join(' ')} onClick={() => {
                    downloadDocxFile(DocumentService.getContract, 'Договор', currentBooking.id)
                }}>
                    Договор
                </button>
            </div>
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
                        <button className={[cl.myBtn, cl.btnSubmit].join(' ')} onClick={() => {
                            changeBooking()
                        }}>
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