import React from "react";

const ListItemBooking = (props) => {
    return (
        <div className='item'>
            <strong style={{width: '150px', textAlign: 'left', padding: 0}}>
                {props.number + props.correction}. {props.booking.cityTo}
            </strong>
            <div style={{width: '250px', textAlign: 'center'}}>
                {props.booking.surnameClient} {props.booking.nameClient[0]}.{props.booking.patronymicClient[0]}.
            </div>
            <div style={{width: '250px', textAlign: 'center'}}>
                {props.booking.surnameEmployee} {props.booking.nameEmployee[0]}.{props.booking.patronymicEmployee[0]}.
            </div>
            <div style={{width: '150px', textAlign: 'center'}}>
                {props.booking.status}
            </div>
            <div>
                <button className='item_btn' onClick={() => {
                    props.chooseItem(props.booking);
                }}>Выбрать</button>
            </div>
        </div>
    );
}

export default ListItemBooking;