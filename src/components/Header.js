import React, {useState, useEffect} from "react";
import {Link, useHistory} from "react-router-dom";

export const Header = () => {

    let history = useHistory();
    const userData = JSON.parse(localStorage.getItem("userData"));

    const [isMenuOpened, setMenuOpened] = useState(false);
    const [isCategoryOpened, setCategoryOpened] = useState(false);
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

    let catList = categories.map((item, index) =>
        <a key={index} className="dropdown-item" href={`/categories/${item.id}`}>{item.category_name}</a>
    )

    const styles = {
        borderRadius: '50%'
    }

    const logout = () =>{
        localStorage.removeItem('userData')
        history.push("/");
    }
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
            <div className="container">
                <Link className="navbar-brand" exact to="/">Блох </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false"
                        aria-label="Toggle navigation"
                        onClick={() =>setMenuOpened(!isMenuOpened)}>
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className={`collapse navbar-collapse ${isMenuOpened && " show"}`} id="navbarsExampleDefault">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link className="nav-link <?= (Session::get('controller_name') == 'Home') ? 'active' : '' ?>"
                               to="/" exact>Главная</Link>
                        </li>

                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle <?= (Session::get('controller_name') == 'Categories') ? 'active' : '' ?>"
                               id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true"
                               aria-expanded="false"
                               onClick={() => setCategoryOpened(!isCategoryOpened)}
                            >Категории</a>
                            <div className={`dropdown-menu ${isCategoryOpened && ' show'}`}  aria-labelledby="navbarDropdownMenuLink">{categories && catList}</div>


                        </li>

                        <li className="nav-item">
                            <Link className="nav-link <?= (Session::get('controller_name') == 'About') ? 'active' : '' ?>"
                               to="/about">О проекте</Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link <?= (Session::get('controller_name') == 'Contact') ? 'active' : '' ?>"
                               to="/contact">Контакты</Link>
                        </li>
                    </ul>
                    <ul className="navbar-nav ml-auto">
                        {userData ?
                            <>
                                <li className="nav-item">
                                    <Link className="nav-link d-flex <?= (Session::get('controller_name') == 'Dashboard') ? 'active' : '' ?>"
                                       to="/dashboard">
                                        <img
                                            src="https://icon-library.com/images/default-user-icon/default-user-icon-8.jpg"
                                            width="24" height="24" className="mr-2" alt="" style={styles} />
                                        <div>Welcome </div>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <a onClick={() => logout()} className="nav-link" href="/">Выйти</a>
                                </li>
                            </>

                        :
                            <>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/register">Зарегистрироваться</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/login">Войти</Link>
                                </li>
                            </>

                        }

                    </ul>
                </div>
            </div>
        </nav>
)
}