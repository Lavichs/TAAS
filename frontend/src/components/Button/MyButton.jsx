import React from 'react';
import cl from './MyButton.module.css'

const MyButton = (props) => {
    switch (props.type) {
        case 'remove':
            return (
                <button className={cl.buttonRemove} onClick={props.onClick}>
                    {props.children}
                </button>
            );
        case 'create':
            return (
                <button className={cl.buttonCreate} onClick={props.onClick}>
                    {props.children}
                </button>
            );
    }
};

export default MyButton;