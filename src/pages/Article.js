import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";

export const Article = () => {
    const [post, setPost] = useState([]);
    const [comment, setComment] = useState('');
    const [commentArr, setCommentArr] = useState([]);
    const postId = window.location.pathname;

    const userId = JSON.parse(localStorage.getItem("userData")) ? JSON.parse(localStorage.getItem("userData")).id : null;
    const getPost = () => {

        const requestOptions = {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
        };
        fetch(`${process.env.REACT_APP_SERVER_API_URL}${postId}`, requestOptions)
            .then(response => response.json())
            .then(data => getComments(data)
            )
    }
    useEffect(() => {
        getPost()

    }, [post, commentArr])

    const getComments = (data) => {
        setPost(data)
        const requestOptions = {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
        };
        fetch(`${process.env.REACT_APP_SERVER_API_URL}/comments/${data.id}`, requestOptions)
            .then(response => response.json())
            .then(data => setCommentArr(data))
    }


    let commentsList = commentArr.map((item, index) =>
        <div className="card card-body bg-light mb-3" id="commentSubmitted">
            <p className="mb-0"><strong className="text-primary">{item.firstname}</strong> написал:</p>
            <p className="mb-4">{item.comment_content}</p>
            <small className="text-muted">{item.timestamp}</small>
        </div>
    )
    const onChangeComment= event => {
        setComment(event.target.value);
    };

    const addCommentHandler = () => {
        const body = {
            user_id: userId,
            post_id: post.id,
            comment_content: comment
        };
        const requestOptions = {
            method: 'POST',
            headers: {"Content-type": "application/x-www-form-urlencoded; charset=UTF-8"},
            body: Object.entries(body).map(([k,v])=>{return k+'='+v}).join('&')
        };
        fetch(`${process.env.REACT_APP_SERVER_API_URL}/post-comment`, requestOptions)
            .then(response => response.json())

        setComment('')
        getPost()
        getComments(post)
        //window.location.reload()
    }

    return(
        <div className="container">
            {/*<?php foreach($data as $item) : ?>*/}
            <h1 className="text-center mt-5">{post.header}</h1>
            <div className="p-2 mb-3 text-center">
                Опубликовано {post.timestamp} в категории <a className="btn btn-light"
                                                                    href={post.category_id}>{post.category_name}</a>
            </div>

            <div className="landscape-img">
                <img src='https://www.jervisbayelectrical.com.au/wp-content/uploads/2016/10/blog-post-img-4.jpg'/>
            </div>

            <p className="mt-5">{post.content}</p>

            <p className="mt-5">Комментарии</p>
            {userId &&
            <div className="mb-5"
                 method="POST">
                <div className="form-group">
                    <label htmlFor="comment">Оставить комментарий</label>
                    <textarea className="form-control" name="user_comment" id="comment" rows="3"
                              value={comment}
                              onChange={onChangeComment}
                    ></textarea>
                </div>
                <button onClick={() => addCommentHandler()} className="btn btn-primary">Опубликовать</button>
            </div>
            }


            {commentsList.length > 0?
                commentsList
                : <div className="card card-body bg-light mb-3">
                    <p className="mb-0">Пока комментариев нет</p>
                </div>
            }

        </div>

)
}