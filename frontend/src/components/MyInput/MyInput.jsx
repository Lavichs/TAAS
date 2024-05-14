import React, {useEffect, useState} from 'react';
import cl from './MyInput.module.css'
import {
    emailRegex,
    nameRegex,
    pasportNumberRegex,
    pasportSeriersRegex,
    phoneRegex,
    testRegex
} from "../../utils/regexes";

const MyInput = ({myType, placeholder, callback, name, ...props}) => {
    const [errors, setErrors] = useState({});
    const [regexp, setRegexp] = useState(null);
    const [type, setType] = useState(null);
    const [val, setVal] = useState('')

    function validate(e) {
        const { name, value } = e.target;
        setErrors({
            ...errors,
            [name]: regexp ? !regexp.test(value) : ''
        });
        setVal(value)
    }

    useEffect(() => {
        switch (myType) {
            case 'fio':
                setRegexp(nameRegex);
                break;
            case 'pasportSeries':
                setRegexp(pasportSeriersRegex);
                break;
            case 'pasportNumber':
                setRegexp(pasportNumberRegex);
                break;
            case 'tel':
                setRegexp(phoneRegex);
                setType('tel')
                break;
            case 'email':
                setRegexp(emailRegex);
                setType('email')
                break;
            case 'test':
                setRegexp(testRegex);
                break;
            default:
                setRegexp(null);
        }
    }, [myType]);

    return (
        <div className={cl.MyInput}>
            <input
                placeholder={placeholder}
                onChange={validate}
                name={name}
                className={cl.MyInput_input}
                type={type ? type : 'text'}
            />
            {errors[name] &&
                <label
                    className={cl.MyInput_label}
                >
                    {val === ''
                        ? 'Это обязательное поле'
                        : 'Поле заполнено некорректно'
                    }
                </label>
            }

        </div>
    );
};

export default MyInput;