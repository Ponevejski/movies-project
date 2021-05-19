import React from "react";

const SearchBar = ({ onChange }) => {
	return <input placeholder="Type name of movie" onChange={onChange} />;
};

export default SearchBar;
