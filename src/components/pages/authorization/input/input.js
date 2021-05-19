import React from 'react';
import "./input.scss"

const Input = (props) => {

	function onChange(event) {
		props.setValue(event.target.value)
	}

	return (
		<input
			className="input__navigation-bar"
			onChange={onChange}
			value={props.value}
			type={props.type}
			placeholder={props.placeholder}
		/>
	);
};

export default Input;
