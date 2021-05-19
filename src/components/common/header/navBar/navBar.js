import React from "react";
import "./navBar.scss";
import Logo from "../img/cinema.png";
import { NavLink } from "react-router-dom";

const NavBar = () => {
	return (
		<div className="navbar">
			<div className="container">
				<NavLink className="navbar" to="/">
					<img src={Logo} className="navbar__logo" alt="empty data" />
					<div className="navbar__header">Главное меню</div>
				</NavLink>
				<div className="navbar__buttons">
					<NavLink className="navbar__button__link" to="/login">
						<div className="navbar__button navbar__button__login">Войти</div>
					</NavLink>
					<NavLink className="navbar__button__link" to="/registration">
						<div className="navbar__button">Регистрация</div>
					</NavLink>
				</div>
			</div>
		</div>
	);
};

export default NavBar;
