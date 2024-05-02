import React, {useEffect, useState} from 'react';
import Loader from "../components/Loader/Loader";
import MyListTour from "../components/Lists/ListTour/MyListTour";
import Pagination from "../components/Pagination/Pagination";
import {useFetching} from "../hooks/useFetching";
import TourService from "../API/TourService";
import {getPageCount} from "../utils/pages";
import MyListBooking from "../components/Lists/ListBooking/MyListBooking";
import BookingService from "../API/BookingService";
import TourDescription from "../components/TourDescription/TourDescription";
import MyModal from "../components/MyModal/MyModal";
import BookingDescription from "../components/BookingDescription/BookingDescription";
import {toast} from "react-toastify";

const Bookings = () => {
    const [bookings, setBooking] = useState([]);
    const [modalDesc, setModalDesc] = useState(false);
    const [currentBooking, setCurrentBooking] = useState(null);
    const [totalPages, setTotalPages] = useState(0);
    const [limit, setLimit] = useState(50);
    const [page, setPage] = useState(1);
    const [pagesArray, setPagesArray] = useState([])

    const [fetchBookings, isBookingLoading, bookingError] = useFetching(async () => {
        const response = await BookingService.getAll(limit, page);
        setBooking(response.data[1]);
        const totalCount = response.data[0].xTotalCount;
        console.log(response.data[1][0])

        setTotalPages(getPageCount(totalCount, limit));
    });

    useEffect(() => {
        let newArray = []
        for (let i = 0; i < totalPages; i++) {
            newArray.push(i + 1)
        }
        setPagesArray(newArray);
    }, [totalPages]);

    useEffect(() => {
        fetchBookings()
    }, [page])

    function chooseItem(booking) {
        setModalDesc(true)
        setCurrentBooking(booking)
    }

    useEffect(() => {
        const close = (e) => {
            if(e.key === 'Escape'){
                setModalDesc(false)
            }
        }
        window.addEventListener('keydown', close)
        return () => window.removeEventListener('keydown', close)
    },[])

    return (
        <div className='catalog'>
            <MyModal visible={modalDesc} setVisible={setModalDesc}>
                <BookingDescription currentBooking={currentBooking} setVisible={setModalDesc} fetchBookings={fetchBookings}/>
            </MyModal>
            <h1 style={{display: "flex", justifyContent: "center", marginBottom: 30}}>ЖУРНАЛ</h1>
            {bookingError
                ?
                <h1 style={{
                    display: "flex",
                    justifyContent: "center",
                    marginTop: 80
                }}>
                    Упс, что-то пошло не так.<br/>Пожалуйста, повторите попытку позже
                </h1>
                :
                isBookingLoading
                    ? <div style={{display: "flex", justifyContent: "center", marginTop: 60}}><Loader/></div>
                    :
                    <>
                        <MyListBooking bookings={bookings} chooseItem={chooseItem} correction={limit * (page - 1)}/>
                        <Pagination pages={pagesArray} page={page} setPage={setPage} totalPage={totalPages}/>
                    </>
            }

        </div>
    );
};

export default Bookings;