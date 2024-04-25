import {useEffect} from "react";

//
export const usePagination = (...props) => {
    useEffect(() => {
        let newArray = []
        for (let i = 0; i < props.totalPages; i++) {
            newArray.push(i + 1)
        }
        props.callback(newArray);
    }, [props.totalPages])
}