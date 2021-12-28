import React from 'react';

interface ToggleProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Toggle = ({ ...checkboxProps }: ToggleProps) => {
	return (
		<label className="switch">
			<input type="checkbox" {...checkboxProps} />
			<span className="slider"></span>
		</label>
	);
};

export default Toggle;
