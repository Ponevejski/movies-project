import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import MainPage from "./pages/main-page";
import Header from "./common/header/header";
import Registration from "./pages/authorization/registration/registration";
import Login from "./pages/authorization/login/login";

function App() {
	return (
		<>
			<BrowserRouter>
				<Header />
				<Switch>
					<Route path="/registration" component={Registration} />
					<Route path="/login" component={Login} />
					<Route path="/" component={MainPage} />
				</Switch>
			</BrowserRouter>
		</>
	);
}

export default App;
