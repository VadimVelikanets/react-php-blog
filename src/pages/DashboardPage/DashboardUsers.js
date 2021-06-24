import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";

export const DashboardUsers = () => {
    const [users, setUsers] = useState([]);
    const getUsers = () => {
        const requestOptions = {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
        };
        fetch(`${process.env.REACT_APP_SERVER_API_URL}/users/`, requestOptions)
            .then(response => response.json())
            .then(data => setUsers(data))
    }
    useEffect(() => {
        getUsers()

    }, [])

    const userList = users.map((user, index) =>
        <tr>
            <td>{user.email}</td>
            <td>{user.login_attempts}</td>
            <td>
                <button className="btn btn-white btn-inline selectInput">{user.permission}<i
                    className="fa fa-pencil"></i></button>

                <div className="d-none">
                    <div className="row">
                        <div className="col-md-8 col-lg-8">
                            <form action="<?= URL ?>dashboard/updatePermission/<?= $user->email ?>"
                                  method="POST">
                                <select className="form-control" name="permission_id">
                                    {/*<?php foreach($this->allPermissions as $permission) : ?>*/}
                                    {/*<option*/}
                                    {/*    value="<?= $permission->id ?>"><?= $permission->permission ?></option>*/}
                                    {/*<?php endforeach; ?>*/}
                                    <option value={1}>Admin</option>
                                    <option value={1}>Guest</option>
                                    <option value={1}>Editor</option>
                                </select>
                                <button type="submit"
                                        className="btn btn-xs btn-white btn-inline buttonClose"><i
                                    className="fa fa-check"></i></button>
                            </form>
                        </div>
                        <div className="col-md-2 col-lg-2">
                            <button className="btn btn-xs btn-white btn-inline buttonClose"><i
                                className="fa fa-close"></i></button>
                        </div>


                    </div>
                </div>
            </td>


            <td>
                {user.login_attempts >= 3 ?
                    <form action="<?=URL?>dashboard/unbanUser/<?= $user->email ?>" method="POST">
                        <button type="submit" id="btnToggle" name="btnUser"
                                className="btn btn-danger active" aria-pressed="false"
                                autocomplete="off">Разбанить
                        </button>
                    </form>
                    :
                    <form action="<?=URL?>dashboard/banUser/<?= $user->email ?>" method="POST">
                        <button type="submit" id="btnToggle" name="btnUser" className="btn btn-danger"
                                aria-pressed="false" autocomplete="off">Забанить
                        </button>
                    </form>

                }

            </td>

        </tr>
    )
    return (
        <>
            <div className="col">
                <div className="container">

                    <h2>Админка</h2>

                    <div className="table-responsive">
                        <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                            <thead>
                            <tr>
                                <th>Почта</th>
                                <th>Попыток входа</th>
                                <th>Права</th>
                                <th>Статус</th>
                            </tr>
                            </thead>
                            <tbody>
                            {userList}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}