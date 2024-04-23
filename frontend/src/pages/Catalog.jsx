import React, {useEffect, useState} from 'react';
import ListItem from "../components/ListItem";
import MyList from "../components/MyList";
import MyModal from "../components/MyModal/MyModal";
import TourDescription from "../components/TourDescription/TourDescription";
import {Form} from "react-router-dom";

const Catalog = () => {
    const [tours, setTour] = useState([
        {id: 1, country: 'Russia', city1: 'Orenburg', city2: 'Moscow', price: 21000, description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur dolorum explicabo fugit impedit non reiciendis similique! At consequuntur eaque est eveniet impedit minima quam qui rem repellat similique vero, voluptatem!"},
        {id: 2, country: 'Russia', city1: 'Orenburg', city2: 'Yekaterinburg', price: 15000, description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad adipisci architecto aut consectetur consequatur cupiditate distinctio dolores, fugit ipsa magnam, maxime neque nulla quas rem repudiandae soluta temporibus ullam. Tempora!"},
        {id: 3, country: 'Russia', city1: 'Yekaterinburg', city2: 'Vladivostok', price: 28900, description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam aut deleniti dolor eligendi, ex fuga impedit iste, itaque magni, modi nesciunt odio repellendus voluptatibus! Dolorum ducimus eos ex odit voluptatibus."},
        {id: 4, country: 'Kazakhstan', city1: 'Orenburg', city2: 'Astana', price: 37600, description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores dignissimos facere nihil voluptas! Enim, nobis tempore! Pariatur quam quos suscipit voluptatem? Animi consectetur dolore itaque iure libero nulla officia, velit."},
        {id: 5, country: 'USA', city1: 'Moscow', city2: 'Washington', price: 69900, description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, aspernatur culpa et excepturi ipsam molestiae molestias nobis, officia praesentium quasi, qui quidem quo reiciendis tempore voluptatum! Dolores exercitationem iure pariatur."},
        {id: 6, country: 'Britain', city1: 'Moscow', city2: 'London', price: 51000, description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aliquid amet at consequuntur, corporis dignissimos, error ex in iure iusto minus nostrum pariatur perferendis perspiciatis quam quia quis veniam voluptas."},
        {id: 7, country: 'China', city1: 'Moscow', city2: 'Pekin', price: 54200, description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate dicta eos fuga minus, nostrum officia repellat reprehenderit suscipit! Asperiores corporis dignissimos esse explicabo facilis fuga, minima non provident qui repellendus?"},
        {id: 8, country: 'South Korea', city1: 'Yekaterinburg', city2: 'Seul', price: 72000, description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad dicta dolores, doloribus, explicabo harum illo ipsa maxime minus neque, possimus rerum sunt vero. Aliquam ipsam ipsum quasi quod reiciendis temporibus!"},

        {id: 9, country: 'Russia', city1: 'Yekaterinburg', city2: 'Vladivostok', price: 28900, description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam aut deleniti dolor eligendi, ex fuga impedit iste, itaque magni, modi nesciunt odio repellendus voluptatibus! Dolorum ducimus eos ex odit voluptatibus."},
        {id: 10, country: 'Kazakhstan', city1: 'Orenburg', city2: 'Astana', price: 37600, description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores dignissimos facere nihil voluptas! Enim, nobis tempore! Pariatur quam quos suscipit voluptatem? Animi consectetur dolore itaque iure libero nulla officia, velit."},
        {id: 11, country: 'USA', city1: 'Moscow', city2: 'Washington', price: 69900, description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, aspernatur culpa et excepturi ipsam molestiae molestias nobis, officia praesentium quasi, qui quidem quo reiciendis tempore voluptatum! Dolores exercitationem iure pariatur."},
        {id: 12, country: 'Britain', city1: 'Moscow', city2: 'London', price: 51000, description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aliquid amet at consequuntur, corporis dignissimos, error ex in iure iusto minus nostrum pariatur perferendis perspiciatis quam quia quis veniam voluptas."},
        {id: 13, country: 'China', city1: 'Moscow', city2: 'Pekin', price: 54200, description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate dicta eos fuga minus, nostrum officia repellat reprehenderit suscipit! Asperiores corporis dignissimos esse explicabo facilis fuga, minima non provident qui repellendus?"},
        {id: 14, country: 'South Korea', city1: 'Yekaterinburg', city2: 'Seul', price: 72000, description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad dicta dolores, doloribus, explicabo harum illo ipsa maxime minus neque, possimus rerum sunt vero. Aliquam ipsam ipsum quasi quod reiciendis temporibus!"},
    ]);
    const tour = {id: 1, country: 'Russia', city1: 'Orenburg', city2: 'Moscow', price: 15000};

    const [modalDesc, setModalDesc] = useState(false);
    const [modalBook, setModalBook] = useState(false);
    const [currentTour, setCurrentTour] = useState(tour)

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
            <MyModal visible={modalDesc} setVisible={setModalDesc}>
                <TourDescription currentTour={currentTour}/>
                <button onClick={bookingTour}>Buy</button>
            </MyModal>
            <MyModal visible={modalBook} setVisible={setModalBook}>
                <form>
                    <h1>Регистрация брони</h1>
                    <input name="query" />
                    <button type="reset">Search</button>
                </form>
            </MyModal>
            <h1 style={{textAlign: 'center'}}>КАТАЛОГ</h1>
            <MyList tours={tours} chooseItem={chooseItem}/>
        </div>
    );
};

export default Catalog;