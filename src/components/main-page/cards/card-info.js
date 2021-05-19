import React from "react";
import { useSelector } from "react-redux";

const CardInfo = (props) => {
	const movie = useSelector((state) => state.movies);
	const card = movie.find((x) => x.id.toString() === props.match.params.id);

	return <div>{card.title}</div>;
};

export default CardInfo;
