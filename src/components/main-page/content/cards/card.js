import React from "react";

import "./styles/card.scss";

const Card = ({ name, rating, image }) => {
	const background_img = `https://image.tmdb.org/t/p/w500/${image}`;
	return (
		<div className="card">
			<img src={background_img} alt="no data"></img>
			<h1>{name}</h1>
			<h1>{rating}</h1>
		</div>
	);
};

export default Card;
