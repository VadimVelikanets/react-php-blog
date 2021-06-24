import React, {useState} from "react";

export const DashboardCategory = () => {
    const [category, setCategory] = useState('');
    const onChangeCategory = event => {
        setCategory(event.target.value);
    };

    const CreateCat = () =>{
        const body = { category_name: category};
        const requestOptions = {
            method: 'POST',
            headers: {"Content-type": "application/x-www-form-urlencoded; charset=UTF-8"},
            body: Object.entries(body).map(([k,v])=>{return k+'='+v}).join('&')
        };
        fetch(`${process.env.REACT_APP_SERVER_API_URL}/categories`, requestOptions)
            .then(response => response.json())
        setCategory('')
    }

    return (
        <div className="col">
            <div className="container">


                <h2>Добавить категорию</h2>
                <div className="card card-body bg-light mt-4 mb-5">
                    <div >

                        <div className="form-group">
                            <label htmlFor="title">Категория: <sup>*</sup></label>
                            <input type="text" name="category" className="form-control form-control-lg"
                                   value={category}
                                   onChange={onChangeCategory}
                            />
                        </div>

                        <button type="submit" className="btn btn-success" onClick={() => CreateCat()} >Добавить</button>
                    </div>

                </div>
            </div>
        </div>


)
}