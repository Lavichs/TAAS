import React from 'react';
import cl from './MyModal.module.css'

const MyModal = ({children, visible, setVisible}) => {

    const rootClasses = [cl.myModal]
    if (visible) {
        rootClasses.push(cl.active)
    }

    return (
        <div
            className={rootClasses.join(' ')}
            onClick={() => setVisible(false)}
            onScroll={(event) => event.preventDefault()}
            onKeyPress={(e) => console.log(e.key)}
        >
            <div className={cl.myModalContainer} onClick={(event) => event.stopPropagation()}>
                {children}
            </div>
        </div>
    );
};

export default MyModal;