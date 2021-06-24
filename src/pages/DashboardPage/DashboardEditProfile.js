import React, {useState} from "react";

export const DashboardEditProfile = () => {
    const oldFistName = JSON.parse(localStorage.getItem("userData")).firstname;
    const oldLastname = JSON.parse(localStorage.getItem("userData")).lastname;
    const oldEmail = JSON.parse(localStorage.getItem("userData")).email;
    const userId = JSON.parse(localStorage.getItem("userData")).id;
    const [firstname, setFirstname] = useState(oldFistName);
    const [lastname, setLastname] = useState(oldLastname);
    const [email, setEmail] = useState(oldEmail);
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    const onChangeFirstname = event => {
        setFirstname(event.target.value);
    };
    const onChangeLastname = event => {
        setLastname(event.target.value);
    };
    const onChangeEmail= event => {
        setEmail(event.target.value);
    };
    const onChangePassword = event => {
        setPassword(event.target.value);
    };
    const onChangePasswordConfirm = event => {
        setPasswordConfirm(event.target.value);
    };

    const updateUserHandler = () =>{
        const body = {
            firstname,
            lastname,
            email,
            password,
            userId
        };
        console.log(body)
        if(firstname.trim() !== '' && lastname.trim() !== '' && email.trim() !== '' && password.trim() !== '' ){
            if(password === passwordConfirm){

                setErrorMessage('');
                const requestOptions = {
                    method: 'PUT',
                    headers: {"Content-type": "application/x-www-form-urlencoded; charset=UTF-8"},
                    body: Object.entries(body).map(([k,v])=>{return k+'='+v}).join('&')
                };
                fetch(`${process.env.REACT_APP_SERVER_API_URL}/user`, requestOptions)
                    .then((response) => {
                        if(response.status === 500){
                            setErrorMessage('Email уже зарегистрирован')
                        }else{
                            setSuccessMessage('Обновление прошла успешно!')
                        }
                    })
            } else  {
                setErrorMessage('Пароли не совпадают');
            }
        } else{
            setErrorMessage('Незаполнены все поля')
        }

    }

    return(
        <>
            <div className="col">
                <div className="container">
                    <h2>Изменить профиль</h2>


                    <div className="card card-body bg-light mt-4 mb-5">


                        <div>

                            <input type="hidden" name="file_id" value="<?= $this->userData['file_id'] ?>"/>

                            <div className="form-group">
                                <input type="hidden" name="MAX_FILE_SIZE" value="3000000"/>
                            </div>

                            <div className="form-group inputDnD">
                                <label htmlFor="title">Загрузить аватарку: <sup>*</sup></label>
                                <input type="file" className="form-control-file text-upload font-weight-bold"
                                       name="new_foto" id="inputFile" onChange="readUrl(this)"
                                       data-title="Нажмите для загрузки картинки" />
                            </div>

                            <div className="form-group">
                                <label htmlFor="title">Имя: <sup>*</sup></label>
                                <input type="text" name="firstname"
                                       className="form-control form-control-lg <?= $firstnameErr ?>"
                                       value={firstname}
                                       onChange={onChangeFirstname} />
                                {/*<span className="invalid-feedback"><?= $nameErrorMsg ?></span>*/}
                    </div>

                    <div className="form-group">
                        <label htmlFor="title">Фамилия: <sup>*</sup></label>
                        <input type="text" name="lastname"
                               className="form-control form-control-lg <?= $lastNameErr ?>"
                               value={lastname}
                               onChange={onChangeLastname} />
                        {/*<span className="invalid-feedback"><?= $lastNameErrorMsg ?></span>*/}
                    </div>

                    <div className="form-group">
                        <label htmlFor="title">Почта: <sup>*</sup></label>
                        <input type="text" name="email"
                               className="form-control form-control-lg <?= $emailErr ?>"
                               value={email}
                               onChange={onChangeEmail} />
                        {/*<span className="invalid-feedback"><?= $emailErrorMsg ?></span>*/}
                    </div>

                    <div className="form-group">
                        <label htmlFor="title">Новый пароль: <sup>*</sup></label>
                        <input type="password" name="password" Placeholder="Введите пароль"
                               className="form-control form-control-lg <?= $passwordErr ?>"
                               value={password}
                               onChange={onChangePassword} />

                        {/*<span className="invalid-feedback"><?= $passwordErrorMsg ?></span>*/}
                    </div>

                    <div className="form-group">
                        <label htmlFor="title">Подтвердите новый пароль: <sup>*</sup></label>
                        <input type="password" name="confirm_password" Placeholder="Введите новый пароль"
                               className="form-control form-control-lg <?= $confirmPasswordErr ?>"
                               value={passwordConfirm}
                               onChange={onChangePasswordConfirm} />

                    </div>

                            <button type="submit" onClick={() => updateUserHandler()} className="btn btn-success">Обновить</button>
                            <div className='text-success'>{successMessage}</div>
                </div>

                </div>
                </div>
            </div>
        </>


)
}