import React, {useState} from 'react';
import "../registration/registration.scss"
import Input from "../input/input";

const Login = () => {

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	return (
		<div className='registration'>
			<div className="registration__header">Вход</div>
			<Input value={email} setValue={setEmail} type="text" placeholder="Введите email:"/>
			<Input value={password} setValue={setPassword} type="password" placeholder="Введите пароль:"/>
			<button className="registration__btn" >Войти</button>
		</div>
	);
};

export default Login;
