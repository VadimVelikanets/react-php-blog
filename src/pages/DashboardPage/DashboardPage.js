import React from "react";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import {DashboardView} from "./DashboardView";
import {DashboardAdd} from "./DashboardAdd";
import {DashboardCategory} from "./DashboardCategory";
import {DashboardUserPosts} from "./DashboardUserPosts";

export const DashboardPage = () => {
    return (
        <>
            <div className="row">
                <nav className="col-md-2 d-none d-md-block bg-light sidebar negativeMargin">
                    <div className="fixed-left">
                        <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
                            <span>Админка</span>
                            <a className="d-flex align-items-center text-muted" href="#">
                                <span data-feather="plus-circle"></span>
                            </a>
                        </h6>
                        <ul className="nav flex-column mb-2">
                            <li className="nav-item">
                                <a className="nav-link" href="<?= URL ?>dashboard/editProfile"><span
                                    data-feather="file-text"></span>Изменить профиль</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link " href="<?= URL ?>dashboard/view"><span
                                    data-feather="file-text"></span>Просмотреть посты</a>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link " to="/dashboard/user-posts"><span
                                    data-feather="file-text"></span>Ваши посты</Link>
                            </li>
                            <li className="nav-item">
                                <Link  className="nav-link" to="dashboard/add"><span
                                    data-feather="file-text"></span>Добавить пост</Link>
                            </li>

                        </ul>

                        <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
                            <span>Полномочия Админа</span>
                            <a className="d-flex align-items-center text-muted" href="#">
                                <span data-feather="plus-circle"></span>
                            </a>
                        </h6>
                        <ul className="nav flex-column mb-2">
                            <li className="nav-item">
                                <Link className="nav-link" to="/dashboard/category"><span
                                    data-feather="file-text"></span>Добавить категорию</Link>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="<?= URL ?>dashboard/allUsers"><span
                                    data-feather="file-text"></span>Управления пользователями</a>
                            </li>
                        </ul>

                    </div>
                </nav>

                <div className="col-md-2"></div>
                <Switch>
                    <Route exact path="/dashboard" >
                        <DashboardView/>
                    </Route>
                    <Route exact path="/dashboard/add" >
                        <DashboardAdd/>
                    </Route>
                    <Route exact path="/dashboard/category" >
                        <DashboardCategory/>
                    </Route>
                    <Route exact path="/dashboard/user-posts" >
                        <DashboardUserPosts/>
                    </Route>
                </Switch>

            </div>

        </>
    )
}