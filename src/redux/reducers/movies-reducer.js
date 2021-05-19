import { GETED_MOVIE } from "../action-types/actionTypes";

const initialState = {
	movie: [
		{
			page: 1,
			results: [
				{
					adult: false,
					backdrop_path: "/2va32apQP97gvUxaMnL5wYt4CRB.jpg",
					genre_ids: (2)[(14, 28)],
					id: 268,
					original_language: "en",
					original_title: "Batman",
					overview:
						'Batman must face his most ruthless nemesis when a deformed madman calling himself "The Joker" seizes control of Gotham\'s criminal underworld.',
					popularity: 36.72,
					poster_path: "/tDexQyu6FWltcd0VhEDK7uib42f.jpg",
					release_date: "1989-06-23",
					title: "Batman",
					video: false,
					vote_average: 7.2,
					vote_count: 5486,
				},
			],
		},
	],
};

const movieReducer = (state = initialState, action) => {
	switch (action.type) {
		case GETED_MOVIE:
			return {
				movie: [action.payload],
			};
		default:
			return state;
	}
};

export default movieReducer;
