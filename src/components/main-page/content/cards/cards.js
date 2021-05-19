import React from "react";

import Card from "./card";
import "./styles/card-field.scss";

const Cards = ({ filteredMovies }) => {
	const cardsarray = filteredMovies.map((item) => {
		return (
			<Card
				key={item.id}
				name={item.original_title}
				rating={item.vote_average}
				image={item.poster_path}
				release={item.release_date}
			/>
		);
	});

	return <div className="card-field">{cardsarray}</div>;
};

export default Cards;
