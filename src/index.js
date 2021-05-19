import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import reportWebVitals from "./reportWebVitals";

import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import combineReducers from "./redux/rootReducer";

const composeEnhancers =
	typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
		? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
				// Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
		  })
		: compose;

const loggerMiddleWare = (store) => (next) => (action) => {
	const result = next(action);
	// console.log(store.getState());
	return result;
};

const store = createStore(
	combineReducers,
	composeEnhancers(applyMiddleware(loggerMiddleWare, thunk))
);

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById("root")
);

reportWebVitals();
