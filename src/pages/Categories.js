import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
export const Categories = () => {
    const [posts, setPosts] = useState([]);
    const categoryId = window.location.pathname;
    const getPosts = () => {

        const requestOptions = {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
        };
        fetch(`${process.env.REACT_APP_SERVER_API_URL}${categoryId}`, requestOptions)
            .then(response => response.json())
            .then(data => setPosts(data))
    }
    useEffect(() => {
        getPosts()

    }, [])
    let postList = posts.map((item, index) =>
        <div class="card">
            <a href="/category/show/<?= $item->id; ?>">
                <img class="card-img-top" src={`/${item.image}`} alt="Card image cap"/>
            </a>
            <div class="card-body">

                <p class="card-text mb-0 text-muted"><small>{item.category_name}</small></p>

                <h5 class="card-title">{item.header}</h5>
                <p class="card-text">{item.header.substr(0,200)}...<Link to={`/posts/${item.id}`}>Читать далее</Link></p>
                <div class="row">
                    <div class="col">
                        <p class="card-text"><small class="text-muted">{item.timestamp}</small></p>
                    </div>

                    <div class="col">
                        <p class="card-text pull-right"><small class="text-muted">Автор: <br />{item.firsname} {item.firsname}</small></p>
                </div>
            </div>
        </div>
        </div>
    )
    return (
        <div class="container">
            <h1 class="text-center mt-5">Категория: </h1>

            <section>
                <div class="card-columns">
                    {postList.length > 0 ? postList
                        : <div>В данном разделе еще нет записей</div>
                    }
        </div>

        </section>
        </div>
    )
}