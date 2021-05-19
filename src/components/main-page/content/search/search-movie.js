import React from "react";

import SearchBar from "./search-bar";

const SearchMovie = ({
	onMovieChange,
	onMovieDispatch,
	onMinRatingFilter,
	onMaxRatingFilter,
	onHandleRating,
}) => {
	return (
		<>
			<SearchBar onChange={onMovieChange} />
			<button onClick={onMovieDispatch}>Search</button>
			<input placeholder="Min rating" onChange={onMinRatingFilter}></input>
			<input placeholder="Max rating" onChange={onMaxRatingFilter}></input>
			<button onClick={onHandleRating}>Filter</button>
		</>
	);
};

export default SearchMovie;
