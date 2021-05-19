import React from "react";
import GenresButton from "./GenresButton";

const Genres = ({ onGenreDispatch }) => {
	return (
		<>
			<GenresButton
				filterGenre={onGenreDispatch}
				filterValue={35}
				description={"Comedy"}
			/>
			<GenresButton
				filterGenre={onGenreDispatch}
				filterValue={27}
				description={"Horror"}
			/>
			<GenresButton
				filterGenre={onGenreDispatch}
				filterValue={10751}
				description={"Family"}
			/>
			<GenresButton
				filterGenre={onGenreDispatch}
				filterValue={16}
				description={"Cartoons"}
			/>
			<GenresButton
				filterGenre={onGenreDispatch}
				filterValue={18}
				description={"Dramma"}
			/>
			<GenresButton
				filterGenre={onGenreDispatch}
				filterValue={37}
				description={"Western"}
			/>
		</>
	);
};

export default Genres;
