import React from "react";

import LogIn from "./log-in/logIn";
import SignUp from "./sign-up/signUp";
import "./styles/auth.scss";

const Account = () => {
	return (
		<div className="auth">
			<LogIn />
			<SignUp />
		</div>
	);
};

export default Account;
