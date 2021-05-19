import React from "react";

import SearchBar from "./search-bar";

const SearchMovie = ({
	onMovieChange,
	onMovieDispatch,
	onRatingHandler,
	onHandleRating,
}) => {
	return (
		<>
			<SearchBar onChange={onMovieChange} />
			<button onClick={onMovieDispatch}>Search</button>

			<input placeholder="Min rating" onChange={onRatingHandler}></input>
			<button onClick={onHandleRating}>Filter</button>
		</>
	);
};

export default SearchMovie;
