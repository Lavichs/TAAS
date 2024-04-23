import React from 'react';
import cl from './TourDescription.module.css';

const TourDescription = ({currentTour}) => {

    if (!currentTour) {
        return <h1>Тур не выбран</h1>
    }

    return (
        <div>
            <h1>{currentTour.country}</h1>
            <div>
                <div>
                    <div>3 мая</div>
                    <div>7 ночей</div>
                </div>
                <div>{currentTour.price}</div>
            </div>
            <div>{currentTour.description}</div>
        </div>
    );
};

export default TourDescription;