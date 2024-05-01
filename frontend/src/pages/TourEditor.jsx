import React, {useEffect, useState} from 'react';
import cl from './styles/TourEditor.module.css'
import {useFetching} from "../hooks/useFetching";
import TourService from "../API/TourService";
import {getPageCount} from "../utils/pages";
import TourOperatorService from "../API/TourOperatorService";
import Loader from "../components/Loader/Loader";
import MyListTour from "../components/Lists/ListTour/MyListTour";

const TourEditor = () => {
    const [data, setData] = useState({})
    const [tourOperators, setTourOperators] = useState([])

    const [fetchTO, isTOLoading, TOError] = useFetching(async () => {
        const response = await TourOperatorService.getAll();
        setTourOperators(response.data[1]);
    });

    useEffect(() => {
        fetchTO()
    }, [])

    const submit = e => {
        e.preventDefault()
        console.log(data)

        TourService.create(data)
    }
    const updateData = e => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }

    return (
        <div>
            <h1 style={{display: "flex", justifyContent: "center", marginBottom: 30}}>Создание тура</h1>
            {isTOLoading
                ? <div style={{display: "flex", justifyContent: "center", marginTop: 60}}><Loader/></div>
                :
                TOError ?
                    <h1 style={{
                        display: "flex",
                        justifyContent: "center",
                        marginTop: 80
                    }}>
                        Упс, что-то пошло не так.<br/>Пожалуйста, повторите попытку позже
                    </h1>
                    :
                <div style={{display: "flex", justifyContent: "center"}}>
                    <form onSubmit={submit} onChange={updateData}>
                        <div>
                            <input className={cl.inputCT} name='city2' placeholder='Пункт назначения'/>
                            <input className={cl.inputCT} name='city1' placeholder='Пункт отправления'/>
                        </div>
                        <div>
                            <input className={cl.inputCT} name='date1' placeholder='Дата отправления (гггг-мм-дд)'/>
                            <input className={cl.inputCT} name='date2' placeholder='Дата возвращения (гггг-мм-дд)'/>
                        </div>
                        <div>
                            <input className={cl.inputCT} name='country' placeholder='Страна'/>
                            <input className={cl.inputCT} name='price' placeholder='Цена (₽)'/>
                        </div>
                        <div className={cl.specificInputsBox}>
                            <textarea className={cl.MyTextarea} name='description' placeholder='Описание'></textarea>
                            <select className={cl.MyTextarea} name='tourOperator'>
                                {tourOperators.map(({id, title}) =>
                                    <option key={id} value={id}>{title}</option>
                                )}
                            </select>
                        </div>
                        <div className={cl.buttonsBox}>
                            <button className={[cl.myBtn, cl.btnSubmit].join(' ')}>
                                Сохранить
                            </button>
                            <button className={[cl.myBtn, cl.btnCancel].join(' ')} type='reset'>
                                Отменить
                            </button>
                        </div>
                    </form>
                </div>
            }
        </div>
    );
};

export default TourEditor;