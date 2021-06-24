import React, {useEffect, useState} from "react";
import {useHistory} from "react-router-dom";

export const DashboardAdd= () => {
    const userId = JSON.parse(localStorage.getItem("userData")).id;
    const [postTitle, setPostTitle] = useState('');
    const [postText, setPostText] = useState('');
    const [categories, setCategories] = useState([]);
    const [categorieId, setCategoriesId] = useState(1);

    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    const onChangeTitle= event => {
        setPostTitle(event.target.value);
    };

    const onChangeCategory= event => {
        setCategoriesId(event.target.value);
    };

    const onChangeText= event => {
        setPostText(event.target.value);
    };
    useEffect(() => {
        const requestOptions = {
            method: 'GET',
            headers: { 'Content-Type': 'application/json', },
        };
        fetch(`${process.env.REACT_APP_SERVER_API_URL}/categories`, requestOptions)
            .then(response => response.json())
            .then(data => setCategories(data))

    }, [])

    const addPostHandler = () =>{
        const body = {
            header: postTitle,
            content: postText,
            category_id: 2,
            user_id: userId,
            file_id: 1231
        };
        console.log(body)
        if(postTitle.trim() !== '' && postText.trim() !== '' ){
                setErrorMessage('');
                const requestOptions = {
                    method: 'POST',
                    headers: {"Content-type": "application/x-www-form-urlencoded; charset=UTF-8"},
                    body: Object.entries(body).map(([k,v])=>{return k+'='+v}).join('&')
                };
                fetch(`${process.env.REACT_APP_SERVER_API_URL}/posts`, requestOptions)
                    .then((response) => {
                        if(response.status === 500){
                            setErrorMessage('error add post')
                        }else{
                            setSuccessMessage('пост добавлен!')
                            setPostTitle('')
                            setPostText('')

                        }
                    })

        } else{
            setErrorMessage('Незаполнены все поля')
        }



    }

    let optionList = categories.map((item, index) =>
        <option key={index} value={item.id}>{item.category_name}</option>
    )
    return (
        <>
            <div className="col-md-10">
                <div className="container">
                    <h2>Добавить пост</h2>

                    <div className="card card-body bg-light mt-4 mb-5">


                        <div>
                            <div className="form-group">
                                <label htmlFor="title">Название: <sup>*</sup></label>
                                <input type="text" name="header" className="form-control form-control-lg"
                                       value={postTitle}
                                       onChange={onChangeTitle} />
                            </div>

                            <div className="form-group">
                                <label htmlFor="category">Выберите категорию: <sup>*</sup></label>
                                <select className="form-control" name="category_id" onChange={onChangeCategory}
                                value={categorieId}
                                >
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
                                          className="form-control form-control-lg"
                                          value={postText}
                                          onChange={onChangeText}>  </textarea>
                            </div>
                            <button onClick={()=> addPostHandler()} className="btn btn-success"  >Submit</button>
                            <div className='text-success'>{successMessage}</div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}