import React from 'react';
import ListItemBooking from "./ListItemBooking";
import cl from './MyListBooking.module.css'

const MyListTour = (props) => {
    return (
        <div>
            <div className={cl.item_titles}>
                <strong style={{width: '150px', textAlign: 'left', padding: 0}}>
                    Город прибытия
                </strong>
                <strong style={{width: '250px', textAlign: 'center'}}>
                    Клиент
                </strong>
                <strong style={{width: '250px', textAlign: 'center'}}>
                    Сотрудник
                </strong>
                <strong style={{width: '150px', textAlign: 'center'}}>
                    Статус бронирования
                </strong>
                <strong style={{width: '100px', textAlign: 'center'}}>
                </strong>
            </div>
            {props.bookings.map((booking, index) =>
                <ListItemBooking number={index+1}
                                booking={booking}
                                nameC={booking.nameClient}
                                key={booking.id}
                                chooseItem={props.chooseItem}
                                correction={props.correction}/>
            )}
        </div>
    );
};

export default MyListTour;