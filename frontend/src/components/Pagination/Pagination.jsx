import React from 'react';
import cl from './Pagination.module.css';

const Pagination = (props) => {
    return (
        <div className={cl.container}>
            <ul className={cl.pagination}>
                <li><button
                    onClick={() => {
                        if (props.page > 1) {
                        props.setPage(props.page - 1)
                    }}}>
                    «
                </button></li>
                {props.pages.map(p =>
                    <li key={p}><button onClick={() => props.setPage(p)} className={props.page === p ? cl.active : ''}>{p}</button></li>
                )}
                <li><button
                    onClick={() => {
                        if (props.page < props.totalPage) {
                            props.setPage(props.page + 1)
                        }}}>
                    »
                </button></li>
            </ul>
        </div>
    );
};

export default Pagination;