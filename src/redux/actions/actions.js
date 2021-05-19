import axios from "axios";

import { API_URL } from "../../constants/constants";
import { GETED_MOVIE } from "../action-types/actionTypes";

export function fetchMovie(movie) {
	return async function (dispatch) {
		const url = `${API_URL}&query={${movie}}`;
		const request = await axios.get(url);

		dispatch({
			type: GETED_MOVIE,
			payload: request.data,
		});
	};
}
