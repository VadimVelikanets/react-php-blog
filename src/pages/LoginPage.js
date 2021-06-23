import React from "react";
import {Link} from "react-router-dom";
export const LoginPage = () => {
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
                            <form action="/auth/doLogin" method="POST">
                                <div className="form-group">
                                    <label htmlFor="email">Почта: <sup>*</sup></label>
                                    <input type="text" name="email"
                                           className="form-control form-control-lg <?= ($emailError) ? 'is-invalid' : '' ?>" />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="name">Пароль: <sup>*</sup></label>
                                    <input type="password" name="password"
                                           className="form-control form-control-lg <?= ($emailError) ? 'is-invalid' : '' ?>" />
                                </div>

                                <div className="row">
                                    <div className="col">
                                        <input type="submit" value="Войти" className="btn btn-success btn-block" />
                                    </div>
                                    <div className="col">
                                        <Link to="/register" className="btn btn-light btn-block">Нет аккаунта?
                                            Зарегистрируйтесь</Link>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}