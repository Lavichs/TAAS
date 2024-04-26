import React from 'react';

const ListItemTour = (props) => {
    const newPrice = props.tour.discount ? props.tour.price * ((100 - props.tour.discount) / 100) : props.tour.price;
    return (
        <div className='item'>
            <strong style={{width: '150px', textAlign: 'left', padding: 0}}>
                {props.number + props.correction}. {props.tour.country}
            </strong>
            <div style={{width: '250px', textAlign: 'center'}}>
                {props.tour.city1}-{props.tour.city2}
            </div>
            <div style={{width: '150px', textAlign: 'center'}}>
                {props.tour.discount ? <del>{props.tour.price}</del> : <></>} {newPrice}₽
            </div>
            <div>
                <button className='btn item_btn' onClick={() => {
                    props.chooseItem(props.tour);
                }}>Выбрать</button>
            </div>
        </div>
    );
};

export default ListItemTour;