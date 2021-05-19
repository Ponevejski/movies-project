import React, { useState, useEffect } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import Cards from "./cards/cards";
import CardInfo from "./cards/card-info";
import SearchMovie from "./search/search-movie";
import Genres from "./genres/genres";

import { fetchMovie, fetchGenre } from "../../redux/actions/actions";

const Content = () => {
	const dispatch = useDispatch();
	const movie = useSelector((state) => state.movies);
	const [filteredMovies, setFilteredMovies] = useState(movie);
	const [nameOfMovie, setNameOfMovie] = useState();
	const [minRating, setMinRating] = useState();
	const [maxRating, setMaxRating] = useState();

	useEffect(() => {
		setFilteredMovies(movie);
	}, [movie, minRating]);

	const onMovieChange = (e) => setNameOfMovie(e.target.value);
	const onMovieDispatch = () => {
		dispatch(fetchMovie(nameOfMovie));
	};

	const onGenreDispatch = (genre_id) => {
		dispatch(fetchGenre(genre_id));
	};

	const onMinRatingFilter = (e) => setMinRating(e.target.value);
	const onMaxRatingFilter = (e) => setMaxRating(e.target.value);

	const onHandleRating = () => {
		setFilteredMovies(
			filteredMovies.filter(
				(item) =>
					item.vote_average >= minRating && item.vote_average <= maxRating
			)
		);
	};

	return (
		<>
			<Genres onGenreDispatch={onGenreDispatch} />
			<SearchMovie
				onMovieChange={onMovieChange}
				onMovieDispatch={onMovieDispatch}
				onMinRatingFilter={onMinRatingFilter}
				onMaxRatingFilter={onMaxRatingFilter}
				onHandleRating={onHandleRating}
			/>

			<BrowserRouter>
				<Route
					path="/"
					exact={true}
					render={() => <Cards filteredMovies={filteredMovies} />}
				/>

				<Route path="/card/:id" component={CardInfo} />
			</BrowserRouter>
		</>
	);
};

export default Content;
