import React from 'react';
import ListItem from "./ListItem";

const MyList = (props) => {
    return (
        <div>
            {props.tours.map((tour, index) =>
                <ListItem number={index+1} tour={tour} key={tour.id}/>
            )}
        </div>
    );
};

export default MyList;