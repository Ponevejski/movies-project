import React from "react";

const GenresButton = ({ description, filterGenre, filterValue }) => {
	return (
		<button
			onClick={() => {
				filterGenre(filterValue);
			}}
		>
			{description}
		</button>
	);
};

export default GenresButton;
