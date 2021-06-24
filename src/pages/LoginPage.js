import React, {useState} from "react";
import {Link, useHistory} from "react-router-dom";
export const LoginPage = () => {
    let history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    const onChangeEmail= event => {
        setEmail(event.target.value);
    };
    const onChangePassword = event => {
        setPassword(event.target.value);
    };


    const loginUserHandler = () =>{
        const body = {
            email,
            password};
        if( email.trim() !== '' && password.trim() !== '' ){

                setErrorMessage('');
                const requestOptions = {
                    method: 'POST',
                    headers: {"Content-type": "application/x-www-form-urlencoded; charset=UTF-8"},
                    body: Object.entries(body).map(([k,v])=>{return k+'='+v}).join('&')
                };
                fetch(`${process.env.REACT_APP_SERVER_API_URL}/login`, requestOptions)
                    .then((response) => {
                        if(response.status === 500){
                            setErrorMessage('Email или пароль не совпадает')
                        }else if(response.status === 301){

                            localStorage.setItem('userData', JSON.stringify(email))
                            window.location.href = '/dashboard';
                        }
                    })

        } else{
            setErrorMessage('Незаполнены поля')
        }



    }
    return (
        <>



                <section>
                <div className="row">
                    <div className="col-md-8 mx-auto">
                        <div className="card card-body bg-light mt-5">

                            {/*<?php if($emailError) : ?>*/}
                            {/*<div className="alert alert-danger alert-dismissible fade show" role="alert">*/}
                            {/*    <?= $emailErrorMsg ?>*/}
                            {/*    <button type="button" className="close" data-dismiss="alert" aria-label="Close">*/}
                            {/*        <span aria-hidden="true">&times;</span>*/}
                            {/*    </button>*/}
                            {/*</div>*/}
                            {/*<?php endif; ?>*/}

                            <h2>Вход</h2>
                            <p>Заполните поля для входа</p>
                            <div>
                                <div className="form-group">
                                    <label htmlFor="email">Почта: <sup>*</sup></label>
                                    <input type="text" name="email"
                                           className="form-control form-control-lg <?= ($emailError) ? 'is-invalid' : '' ?>"
                                           value={email}
                                           onChange={onChangeEmail}
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="name">Пароль: <sup>*</sup></label>
                                    <input type="password" name="password"
                                           className="form-control form-control-lg <?= ($emailError) ? 'is-invalid' : '' ?>"
                                           value={password}
                                           onChange={onChangePassword}
                                    />
                                    <span className="invalid-feedback">{errorMessage}</span>
                                </div>

                                <div className="row">
                                    <div className="col">
                                        <button className="btn btn-success btn-block" onClick={()=> loginUserHandler()}>Войти</button>
                                    </div>
                                    <div className="col">
                                        <Link to="/register" className="btn btn-light btn-block">Нет аккаунта?
                                            Зарегистрируйтесь</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}