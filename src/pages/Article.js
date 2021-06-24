import React, {useEffect, useState} from "react";

export const Article = () => {
    const [post, setPost] = useState([]);
    const postId = window.location.pathname;
    const getPosts = () => {

        const requestOptions = {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
        };
        fetch(`${process.env.REACT_APP_SERVER_API_URL}${postId}`, requestOptions)
            .then(response => response.json())
            .then(data => setPost(data))
    }
    useEffect(() => {
        getPosts()

    }, [])
    return(
        <div className="container">
            {/*<?php foreach($data as $item) : ?>*/}
            <h1 className="text-center mt-5">{post.header}</h1>
            <div className="p-2 mb-3 text-center">
                Опубликовано {post.timestamp} в категории <a className="btn btn-light"
                                                                    href={post.category_id}>{post.category_name}</a>
            </div>

            <div className="landscape-img">
                <img src={post.image}alt=""/>
            </div>

            <p className="mt-5">{post.content}</p>

            <p className="mt-5">Комментарии</p>

            {/*<?php if($user) : ?>*/}
            <form className="mb-5" action="<?= URL ?>category/insertComment/<?= $getId = $item->id ?>#commentSubmitted"
                  method="POST">
                <div className="form-group">
                    <label htmlFor="comment">Оставить комментарий</label>
                    <textarea className="form-control" name="user_comment" id="comment" rows="3"></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Опубликовать</button>
            </form>
            {/*<?php endif; ?>*/}
            {/*<?php endforeach; ?>*/}

            <div className="card card-body bg-light mb-3">
                <p className="mb-0">Пока комментариев нет</p>
            </div>
            {/*<?php else: ?>*/}
            {/*<?php foreach($this->comments as $comment) : ?>*/}
            {/*<div className="card card-body bg-light mb-3" id="commentSubmitted">*/}
            {/*    <p className="mb-0"><strong className="text-primary"><?= $comment->firstname ?></strong> написал:</p>*/}
            {/*    <p className="mb-4"><?= $comment->comment_content ?></p>*/}
            {/*    <small className="text-muted"><?= $comment->timestamp ?></small>*/}
            {/*</div>*/}
            {/*<?php endforeach; ?>*/}
            {/*<?php endif;?>*/}
        </div>

)
}