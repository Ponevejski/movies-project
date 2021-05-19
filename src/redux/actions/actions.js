import axios from "axios";

import { API_URL_DISCOVER, API_URL_SEARCH } from "../../constants/constants";
import { GETED_MOVIE } from "../action-types/actionTypes";

export function fetchMovie(movie) {
	return async function (dispatch) {
		const url = `${API_URL_SEARCH}&query={${movie}}`;
		const request = await axios.get(url);

		dispatch({
			type: GETED_MOVIE,
			payload: request.data,
		});
	};
}

export function fetchGenre(genre) {
	return async function (dispatch) {
		const url = `${API_URL_DISCOVER}&with_genres=${genre}`;
		const request = await axios.get(url);

		dispatch({
			type: GETED_MOVIE,
			payload: request.data,
		});
	};
}
