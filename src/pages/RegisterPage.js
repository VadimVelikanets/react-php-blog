import React, {useState} from "react";
import {Link} from "react-router-dom";

export const RegisterPage = () => {

    const [firsname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    const onChangeFirstname = event => {
        setFirstname(event.target.value);
    };
    const onChangeLastname = event => {
        setLastname(event.target.value);
    };
    const onChangeEmail= event => {
        setEmail(event.target.value);
    };
    const onChangePassword = event => {
        setPassword(event.target.value);
    };
    const onChangePasswordConfirm = event => {
        setPasswordConfirm(event.target.value);
    };

    const registerUserHandler = () =>{
        const body = {
            firsname,
            lastname,
            email,
            password};
            if(firsname.trim() !== '' && lastname.trim() !== '' && email.trim() !== '' && password.trim() !== '' ){
                if(password === passwordConfirm){

                    setErrorMessage('');
                    const requestOptions = {
                        method: 'POST',
                        headers: {"Content-type": "application/x-www-form-urlencoded; charset=UTF-8"},
                        body: Object.entries(body).map(([k,v])=>{return k+'='+v}).join('&')
                    };
                    fetch(`${process.env.REACT_APP_SERVER_API_URL}/register`, requestOptions)
                        .then((response) => {
                        if(response.status === 500){
                            setErrorMessage('Email уже зарегистрирован')
                        }else{
                            setSuccessMessage('Регистрация прошла успешно!')
                            setFirstname('')
                            setLastname('')
                            setEmail('')
                            setPassword('')
                            setPasswordConfirm('')
                        }
                    })
                } else  {
                    setErrorMessage('Пароли не совпадают');
                }
            } else{
                setErrorMessage('Незаполнены все поля')
            }

    }

    return (
        <>
            <section>
                <div className="row">
                    <div className="col-md-8 mx-auto">
                        <div className="card card-body bg-light mt-5">
                            <h2>Создать аккаунт</h2>
                            <p>Заполните все поля для регистрации</p>
                            <div  name="myForm">

                                <div className="form-group">
                                    <label htmlFor="name">Имя: <sup>*</sup></label>
                                    <input type="text" name="firstname"
                                           className="form-control form-control-lg <?= $firstnameErr ?>"
                                           value={firsname}
                                           onChange={onChangeFirstname} />
                                        {/*<span className="invalid-feedback">Ошибка</span>*/}
                                </div>


                                <div className="form-group">
                                    <label htmlFor="name">Фамилия: <sup>*</sup></label>
                                    <input type="text" name="lastname"
                                           className="form-control form-control-lg <?= $lastNameErr ?>"
                                           value={lastname}
                                           onChange={onChangeLastname}
                                    />
                                        {/*<span className="invalid-feedback">Ошибка</span>*/}
                                </div>

                                <div className="form-group">
                                    <label htmlFor="email">Почта: <sup>*</sup></label>
                                    <input type="text" name="email"
                                           className="form-control form-control-lg <?= $emailErr ?>"
                                           value={email}
                                           onChange={onChangeEmail}
                                    />
                                        {/*<span className="invalid-feedback">Ошибка</span>*/}
                                </div>


                                <div className="form-group">
                                    <label htmlFor="name">Пароль: <sup>*</sup></label>
                                    <input type="password" name="password"
                                           className="form-control form-control-lg <?= $passwordErr ?>"
                                           value={password}
                                           onChange={onChangePassword}
                                    />
                                        {/*<span className="invalid-feedback">Ошибка</span>*/}
                                </div>

                                <div className="form-group">
                                    <label htmlFor="confirm_password">Подтвердите пароль: <sup>*</sup></label>
                                    <input type="password" name="confirm_password"
                                           className="form-control form-control-lg <?= $confirmPasswordErr ?>"
                                           value={passwordConfirm}
                                           onChange={onChangePasswordConfirm}
                                    />
                                        <span className="invalid-feedback">{errorMessage}</span>
                                        <span className="text-success">{successMessage}</span>
                                </div>

                                <div className="row">
                                    <div className="col">
                                        <button  onClick={() => registerUserHandler()} value="Зарегистрироваться"
                                                className="btn btn-success btn-block">Зарегистрироваться</button>
                                    </div>
                                    <div className="col">
                                        <Link to="/login" className="btn btn-light btn-block">Есть аккаунт?
                                            Войти</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="mb-5"></div>
        </>
    )
}