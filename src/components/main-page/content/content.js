import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Cards from "./cards/cards";
import SearchMovie from "./search/search-movie";
import { fetchMovie } from "../../../redux/actions/actions";

const Content = () => {
	const dispatch = useDispatch();
	const movie = useSelector((state) => state.movie);
	const [filteredMovies, setFilteredMovies] = useState(movie[0].results);
	const [nameOfMovie, setNameOfMovie] = useState();
	const [rating, setRating] = useState();

	useEffect(() => {
		setFilteredMovies(movie[0].results);
	}, [movie, rating]);

	const onMovieChange = (e) => setNameOfMovie(e.target.value);
	const onMovieDispatch = () => {
		dispatch(fetchMovie(nameOfMovie));
	};

	const onRatingHandler = (e) => setRating(e.target.value);
	const onHandleRating = () => {
		setFilteredMovies(
			filteredMovies.filter((item) => item.vote_average >= rating)
		);
	};

	return (
		<>
			<SearchMovie
				onMovieChange={onMovieChange}
				onMovieDispatch={onMovieDispatch}
				onRatingHandler={onRatingHandler}
				onHandleRating={onHandleRating}
			/>
			<Cards filteredMovies={filteredMovies} rating={rating} />
		</>
	);
};

export default Content;
