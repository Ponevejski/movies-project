import React from "react";

import Card from "./card";
import "./styles/card-field.scss";

const Cards = ({ filteredMovies }) => {
	return (
		<div className="card-field">
			{filteredMovies.map((item) => {
				return (
					<Card
						key={item.id}
						name={item.original_title}
						rating={item.vote_average}
						image={item.poster_path}
					/>
				);
			})}
		</div>
	);
};

export default Cards;
