import React, {useState} from 'react';
import "./registration.scss"
import Input from "../input/input";

const Registration = () => {


	const [firstName, setFirstName] = useState("");
	const [secondName, setSecondName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	return (
		<div className='registration'>
			<div className="registration__header">Регистрация</div>
			<Input value={firstName} setValue={setFirstName} type="text" placeholder="Введите имя:"/>
			<Input value={secondName} setValue={setSecondName} type="text" placeholder="Введите фамилию:"/>
			<Input value={email} setValue={setEmail} type="text" placeholder="Введите email:"/>
			<Input value={password} setValue={setPassword} type="password" placeholder="Введите пароль:"/>
			<button className="registration__btn" >Зарегистрироваться</button>
		</div>
	);
};

export default Registration;
