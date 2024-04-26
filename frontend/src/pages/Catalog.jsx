import React, {useEffect, useState} from 'react';
import MyListTour from "../components/Lists/ListTour/MyListTour";
import MyModal from "../components/MyModal/MyModal";
import TourDescription from "../components/TourDescription/TourDescription";
import axios from "axios";
import Loader from "../components/Loader/Loader";
import {useFetching} from "../hooks/useFetching";
import TourService from "../API/TourService";
import {API_RESOURCE_TOURS} from "../API/constsURL";
import {getPageCount} from "../utils/pages";
import Pagination from "../components/Pagination/Pagination";
import BookingTour from "../components/BookingTour/BookingTour";

const Catalog = () => {
    const [tours, setTour] = useState([]);
    const tour = {id: 1, country: 'Russia', city1: 'Orenburg', city2: 'Moscow', price: 15000};

    const [modalDesc, setModalDesc] = useState(false);
    const [modalBook, setModalBook] = useState(false);
    const [currentTour, setCurrentTour] = useState(null);
    const [totalPages, setTotalPages] = useState(0);
    const [limit, setLimit] = useState(50);
    const [page, setPage] = useState(1);
    const [pagesArray, setPagesArray] = useState([])

    const [fetchTours, isTourLoading, tourError] = useFetching(async () => {
        const response = await TourService.getAll(limit, page);
        setTour(response.data[1]);
        const totalCount = response.data[0].xTotalCount;

        setTotalPages(getPageCount(totalCount, limit));
    });

    useEffect(() => {
        let newArray = []
        for (let i = 0; i < totalPages; i++) {
            newArray.push(i + 1)
        }
        setPagesArray(newArray);
    }, [totalPages]);

    const test = async () => {
        const response = await axios.get(API_RESOURCE_TOURS, {
            params: {
                _limit: limit,
                _page: page
            }
        });
        console.log(response.data)
    }

    useEffect(() => {
        fetchTours()
    }, [page])

    function chooseItem(tour) {
        setModalDesc(true)
        setCurrentTour(tour)
    }
    function bookingTour() {
        setModalBook(true)
        setModalDesc(false)
    }

    useEffect(() => {
        const close = (e) => {
            if(e.key === 'Escape'){
                setModalDesc(false)
                setModalBook(false)
            }
        }
        window.addEventListener('keydown', close)
        return () => window.removeEventListener('keydown', close)
    },[])

    return (
        <div className='catalog'>
            <button onClick={test}>Test</button>
            <MyModal visible={modalDesc} setVisible={setModalDesc}>
                <TourDescription currentTour={currentTour} toBook={bookingTour}/>
            </MyModal>
            <MyModal visible={modalBook} setVisible={setModalBook}>
                <BookingTour setVisible={setModalBook} tourID={currentTour.id}/>
            </MyModal>
            <h1 style={{display: "flex", justifyContent: "center", marginBottom: 30}}>КАТАЛОГ</h1>
            {tourError &&
                <h1 style={{
                    display: "flex",
                    justifyContent: "center",
                    marginTop: 80
                }}>
                    Упс, что-то пошло не так.<br/>Пожалуйста, повторите попытку позже
                </h1>
            }
            {isTourLoading
                ? <div style={{display: "flex", justifyContent: "center", marginTop: 60}}><Loader/></div>
                :
                <>
                    <MyListTour tours={tours} chooseItem={chooseItem} correction={limit * (page - 1)}/>
                </>
            }
            {!isTourLoading && !tourError &&
                <Pagination pages={pagesArray} page={page} setPage={setPage} totalPage={totalPages}/>
            }
        </div>
    );
};

export default Catalog;