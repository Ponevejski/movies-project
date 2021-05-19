import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Cards from "./cards/cards";
import SearchMovie from "./search/search-movie";
import Genres from "./genres/genres";

import { fetchMovie, fetchGenre } from "../../../redux/actions/actions";

const Content = () => {
	const dispatch = useDispatch();
	const movie = useSelector((state) => state.movies);
	const [filteredMovies, setFilteredMovies] = useState(movie[0].results);
	const [nameOfMovie, setNameOfMovie] = useState();
	const [rating, setRating] = useState();

	useEffect(() => {
		setFilteredMovies(movie[0].results);
	}, [movie, rating]);

	console.log(filteredMovies);
	const onMovieChange = (e) => setNameOfMovie(e.target.value);
	const onMovieDispatch = () => {
		dispatch(fetchMovie(nameOfMovie));
	};

	const onGenreDispatch = (num) => {
		dispatch(fetchGenre(num));
	};

	const onRatingHandler = (e) => setRating(e.target.value);
	const onHandleRating = () => {
		setFilteredMovies(
			filteredMovies.filter((item) => item.vote_average >= rating)
		);
	};

	return (
		<>
			<Genres onGenreDispatch={onGenreDispatch} />
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
