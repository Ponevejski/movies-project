import React from "react";
import { Link } from "react-router-dom";

import "./styles/card.scss";

const Card = ({ name, rating, release, image, id }) => {
	const background_img = `https://image.tmdb.org/t/p/w500/${image}`;
	return (
		<div className="card">
			<Link to={"/card/" + id}>
				<img src={background_img} alt="no data"></img>
			</Link>
			<h1>{name}</h1>
			<h1>{rating}</h1>
			<h4>{release}</h4>
			<Link to={"/card/" + id}>Info</Link>
		</div>
	);
};

export default Card;
