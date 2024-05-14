import React from 'react';
import cl from './Tooltip.module.css'

const Tooltip = ({children, ...props}) => {
    return (
        <div className={cl.tooltip}>
            <div className={cl.tooltipIcon}>i</div>
            <div className={cl.tooltipText}>{children}</div>
        </div>
    );
};

export default Tooltip;