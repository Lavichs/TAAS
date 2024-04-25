import React from 'react';
import ListItemTour from "./ListItemTour";

const MyListTour = (props) => {
    return (
        <div>
            {props.tours.map((tour, index) =>
                <ListItemTour number={index+1}
                              tour={tour}
                              key={tour.id}
                              chooseItem={props.chooseItem}
                              correction={props.correction}/>
            )}
        </div>
    );
};

export default MyListTour;