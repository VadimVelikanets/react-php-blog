import React, {useEffect, useState} from "react";
import {useHistory, Link} from "react-router-dom";

export const DashboardUserPosts = () => {
    const userId = JSON.parse(localStorage.getItem("userData")).id;
    const [posts, setPosts] = useState([]);
    const getPosts = () => {
        const requestOptions = {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
        };
        fetch(`${process.env.REACT_APP_SERVER_API_URL}/posts/user/${userId}`, requestOptions)
            .then(response => response.json())
            .then(data => setPosts(data))
    }
    useEffect(() => {
        getPosts()

    }, posts)
    const onPostDelete = (id) =>{

        const requestOptions = {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json', },
        };
        fetch(`${process.env.REACT_APP_SERVER_API_URL}/posts/${id}`, requestOptions)
            .then((response) => {
                if(response.status === 500){
                    console.log('error')
                }else if(response.status === 201){
                    getPosts()
                }
            }).catch(err => console.log(err))

    }
    let postList = posts.map((item, index) =>
        <tr>
            <td>{item.header}</td>
            <td>{item.category_name}</td>
            <td>{item.firstname}</td>
            {/*<?php if(Session::get('user')['permission'] == "Admin"): ?>*/}
            <td><Link to={`/posts/${item.id}`}
                      className="btn btn-dark">Просмотреть</Link></td>
            <td><a href="<?= URL; ?>dashboard/edit/<?= $post->id; ?>"
                   className="btn btn-primary">Изменить</a></td>
            <td><a href="#"
                   className="btn btn-danger"
                   onClick={() => onPostDelete(item.id)}
            >Удалить</a></td>
            {/*<?php elseif(Session::get('user')['permission'] == "Editor"): ?>*/}
            {/*<td><a href="<?= URL; ?>category/show/<?= $post->id; ?>"*/}
            {/*       className="btn btn-dark">Просмотреть</a></td>*/}
            {/*<td><a href="<?= URL; ?>dashboard/edit/<?= $post->id; ?>"*/}
            {/*       className="btn btn-primary">Изменить</a></td>*/}
            {/*<?php elseif(Session::get('user')['permission'] == "Guest"): ?>*/}
            {/*<td><a href="<?= URL; ?>category/show/<?= $post->id; ?>"*/}
            {/*       className="btn btn-dark">Просмотреть</a></td>*/}
            {/*<?php endif; ?>*/}
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
                                <th>Название</th>
                                <th>Категория</th>
                                <th>Автор</th>
                                <th colSpan="3">Параметры публикации</th>
                            </tr>
                            </thead>
                            <tbody>

                            {postList.length > 0 ?
                                postList
                                : <div>У вас пока нет постов</div>
                            }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}