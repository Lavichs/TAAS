import React, {useContext, useEffect, useState} from 'react';
import MyListTour from "../components/Lists/ListTour/MyListTour";
import MyModal from "../components/MyModal/MyModal";
import TourDescription from "../components/TourDescription/TourDescription";
import axios from "axios";
import Loader from "../components/Loader/Loader";
import {useFetching} from "../hooks/useFetching";
import TourService from "../API/TourService";
import {API_AUTHORIZATION, API_RESOURCE_TOURS, API_RESOURCE_TOURS_DELETE} from "../API/constsURL";
import {getPageCount} from "../utils/pages";
import Pagination from "../components/Pagination/Pagination";
import BookingTour from "../components/BookingTour/BookingTour";
import {Link, useNavigate} from "react-router-dom";
import {CREATE_TOUR} from "../consts";
import MyButton from "../components/Button/MyButton";
import {AuthContext} from "../context";

const Catalog = () => {
    const {token, setToken, role, setRole} = useContext(AuthContext)
    const navigate = useNavigate()
    const [tours, setTours] = useState([]);
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
        setTours(response.data[1]);
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

    useEffect(() => {
        fetchTours()
    }, [page])

    function chooseItem(tour) {
        setModalDesc(true)
        setCurrentTour(tour)
        console.log(tour)
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

    const removeTour = async (tour) => {
        setTours(tours.filter(t => t.id !== tour.id))
        await axios.post(API_RESOURCE_TOURS_DELETE, {
            id: tour.id
        })
        setModalDesc(false)
    }

    return (
        <div className='catalog'>
            {currentTour &&
                <>
                    <MyModal visible={modalDesc} setVisible={setModalDesc}>
                        <TourDescription currentTour={currentTour} toBook={bookingTour} removeTour={removeTour}/>
                    </MyModal>
                    <MyModal visible={modalBook} setVisible={setModalBook}>
                        <BookingTour setVisible={setModalBook} tourId={currentTour?.id} tourPrice={currentTour?.price}/>
                    </MyModal>
                </>
            }

            <h1 style={{display: "flex", justifyContent: "center", marginBottom: 30}}>КАТАЛОГ</h1>
            {token && role === 'admin' &&
                <MyButton type='create' onClick={() => navigate(CREATE_TOUR)}>Создать тур</MyButton>
            }
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