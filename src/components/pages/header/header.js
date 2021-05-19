import React from "react";

import Logo from "./logotype/logotype";
import Account from "./account/account";

import "./styles/header.scss";

const Header = () => {
	return (
		<div className="main-page header">
			<Logo />
			<Account />
		</div>
	);
};

export default Header;
