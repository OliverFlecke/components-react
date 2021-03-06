import React from 'react';

export interface ButtonProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	buttonType?: ButtonType;
}

export type ButtonType =
	| 'Primary'
	| 'Secondary'
	| 'Success'
	| 'Danger'
	| 'Warning'
	| 'Link'
	| 'Transparent';

const Button: React.FC<ButtonProps> = ({
	children,
	buttonType,
	disabled,
	...buttonProps
}: ButtonProps) => (
	<button
		className={`btn ${disabled ? '' : getColor(buttonType)}`}
		disabled={disabled}
		{...buttonProps}
	>
		{children}
	</button>
);

export default Button;

Button.defaultProps = {
	buttonType: 'Primary',
};

function getColor(type?: ButtonType) {
	switch (type) {
		case 'Link':
			return 'btn-link';
		case 'Warning':
			return 'btn-warning';
		case 'Danger':
			return 'btn-danger';
		case 'Transparent':
			return 'btn-transparent';
		case 'Success':
			return 'btn-success';
		case 'Secondary':
			return 'btn-secondary';
		case 'Primary':
		default:
			return 'btn-primary';
	}
}
