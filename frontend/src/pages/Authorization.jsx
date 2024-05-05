import React, {useContext, useState} from 'react';
import cl from '../style/Authorization.module.css'
import Logo from './../../public/images/albatros-without-background.png';
import UserService from "../API/UserService";
import {useFetching} from "../hooks/useFetching";
import {useNavigate} from "react-router-dom";
import {CATALOG_ROUTE} from "../consts";
import {AuthContext} from "../context";

const Authorization = () => {
    const {token, setToken, role, setRole} = useContext(AuthContext)
    const [data, setData] = useState({})
    const navigate = useNavigate()

    const [fetchUser, isUserLoading, userError, setError] = useFetching(async () => {
        const response = await UserService.login(data);
        if (!userError) {
            setToken(response.data.token)
            setRole(response.data.role)
            navigate(CATALOG_ROUTE)
        }
        console.log(response)
    })

    const submit = e => {
        e.preventDefault()
        fetchUser(data)
    }
    const updateData = e => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
        setError(false)
    }

    return (
        <form id='auth' className={cl.authForm} onSubmit={submit} onChange={updateData}>
            <div className={cl.containerAuth}>
                <div className={cl.brandLogo}>
                    <img src={Logo} alt=''/>
                </div>
                <div className={cl.inputs}>
                    <label className={cl.labelAuth}>ЛОГИН</label>
                    <input name='login' className={[cl.authInput, cl.inputAuth].join(' ')} type="login" placeholder="Введите логин"/>
                    <label className={cl.labelAuth}>ПАРОЛЬ</label>
                    <input name='password' className={[cl.authInput, cl.inputAuth].join(' ')} type="password" placeholder="Минимум 6 символов"/>
                    {userError
                        ?
                        <label style={{color: "red"}}
                            >Не правильно введен логин или пароль. Попробуйте ещё раз
                        </label>
                        : <></>
                    }
                    <button className={cl.buttonAuth}>Войти</button>
                </div>
            </div>
        </form>
    );
};

export default Authorization;