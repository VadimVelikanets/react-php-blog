import React from "react";
import {Link} from "react-router-dom";
export const RegisterPage = () => {
    return (
        <>
            <section>
                <div className="row">
                    <div className="col-md-8 mx-auto">
                        <div className="card card-body bg-light mt-5">
                            <h2>Создать аккаунт</h2>
                            <p>Заполните все поля для регистрации</p>
                            <form action="=" method="POST" name="myForm">

                                <div className="form-group">
                                    <label htmlFor="name">Имя: <sup>*</sup></label>
                                    <input type="text" name="firstname"
                                           className="form-control form-control-lg <?= $firstnameErr ?>"
                                           value="" />
                                        {/*<span className="invalid-feedback">Ошибка</span>*/}
                                </div>


                                <div className="form-group">
                                    <label htmlFor="name">Фамилия: <sup>*</sup></label>
                                    <input type="text" name="lastname"
                                           className="form-control form-control-lg <?= $lastNameErr ?>"
                                           value="" />
                                        {/*<span className="invalid-feedback">Ошибка</span>*/}
                                </div>

                                <div className="form-group">
                                    <label htmlFor="email">Почта: <sup>*</sup></label>
                                    <input type="text" name="email"
                                           className="form-control form-control-lg <?= $emailErr ?>"
                                           value="" />
                                        {/*<span className="invalid-feedback">Ошибка</span>*/}
                                </div>


                                <div className="form-group">
                                    <label htmlFor="name">Пароль: <sup>*</sup></label>
                                    <input type="password" name="password"
                                           className="form-control form-control-lg <?= $passwordErr ?>"
                                           value="" />
                                        {/*<span className="invalid-feedback">Ошибка</span>*/}
                                </div>

                                <div className="form-group">
                                    <label htmlFor="confirm_password">Подтвердите пароль: <sup>*</sup></label>
                                    <input type="password" name="confirm_password"
                                           className="form-control form-control-lg <?= $confirmPasswordErr ?>"
                                           value="" />
                                        {/*<span className="invalid-feedback">Ошибка</span>*/}
                                </div>

                                <div className="row">
                                    <div className="col">
                                        <input type="submit" value="Зарегистрироваться"
                                               className="btn btn-success btn-block"/>
                                    </div>
                                    <div className="col">
                                        <Link to="/login" className="btn btn-light btn-block">Есть аккаунт?
                                            Войти</Link>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
            <div className="mb-5"></div>
        </>
    )
}