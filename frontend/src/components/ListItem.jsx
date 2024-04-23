import React from 'react';

const ListItem = (props) => {
    return (
        <div className='item'>
            <strong style={{width: '150px', textAlign: 'left', padding: 0}}>
                {props.number}. {props.tour.country}
            </strong>
            <div style={{width: '250px', textAlign: 'center'}}>
                {props.tour.city1}-{props.tour.city2}
            </div>
            <div style={{width: '150px', textAlign: 'center'}}>
                {props.tour.price}₽
            </div>
            <div>
                <button className='item_btn' onClick={() => {
                    props.chooseItem(props.tour);
                }}>Выбрать</button>
            </div>
        </div>
    );
};

export default ListItem;