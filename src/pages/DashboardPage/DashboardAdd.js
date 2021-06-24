import React, {useEffect, useState} from "react";
import {useHistory} from "react-router-dom";

export const DashboardAdd= () => {

    const [postTitle, setPostTitle] = useState('');
    const [postCategotyId, setCategotyId] = useState('');
    const [postText, setPostText] = useState('');
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const requestOptions = {
            method: 'GET',
            headers: { 'Content-Type': 'application/json', },
        };
        fetch(`${process.env.REACT_APP_SERVER_API_URL}/categories`, requestOptions)
            .then(response => response.json())
            .then(data => setCategories(data))

    }, [])

    let optionList = categories.map((item, index) =>
        <option key={index} value={item.id}>{item.category_name}</option>
    )
    return (
        <>
            <div className="col-md-10">
                <div className="container">
                    <h2>Добавить пост</h2>

                    <div className="card card-body bg-light mt-4 mb-5">
                        {/*<div className="alert alert-danger alert-dismissible fade show" role="alert">*/}
                        {/*    <?= $postErrMsg ?>*/}
                        {/*    <button type="button" className="close" data-dismiss="alert" aria-label="Close">*/}
                        {/*        <span aria-hidden="true">&times;</span>*/}
                        {/*    </button>*/}
                        {/*</div>*/}

                        <form action="<?php echo URL; ?>dashboard/doAdd" method="POST" encType="multipart/form-data">
                            <div className="form-group">
                                <label htmlFor="title">Название: <sup>*</sup></label>
                                <input type="text" name="header" className="form-control form-control-lg" value="" />
                            </div>

                            <div className="form-group">
                                <label htmlFor="category">Выберите категорию: <sup>*</sup></label>
                                <select className="form-control" name="category_id">
                                    {optionList}
                                </select>
                            </div>

                            <div className="form-group">
                                <input type="hidden" name="MAX_FILE_SIZE" value="3000000" />
                            </div>

                            <div className="form-group inputDnD">
                                <label htmlFor="title">Загрузить картинку: <sup>*</sup></label>
                                <input type="file" className="form-control-file text-upload font-weight-bold"
                                       name="post_file" id="inputFile" onChange="readUrl(this)"
                                       data-title="Нажмите для загрузки файла" />
                            </div>

                            <div className="form-group">
                                <label htmlFor="body">Текст поста: <sup>*</sup></label>
                                <textarea name="content" rows="15" id="post_text"
                                          className="form-control form-control-lg">  </textarea>
                            </div>
                            <input type="submit" className="btn btn-success" value="Submit" />
                        </form>
                    </div>

                </div>
            </div>
        </>
    )
}