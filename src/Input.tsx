import React, { forwardRef } from 'react';
import useId from './utils/useId';

export interface InputProps {
	label?: string;
	errorMessage?: string;
}

const Input = forwardRef<
	HTMLInputElement,
	InputProps & React.InputHTMLAttributes<HTMLInputElement>
>((props, ref) => {
	const { label, errorMessage, ...inputProps } = props;
	const id = useId('input');

	return (
		<div className="space-y-2">
			<label
				htmlFor={id}
				className="block text-gray-700 dark:text-gray-300 font-medium text-sm"
			>
				{label}
			</label>
			<input
				ref={ref}
				id={id}
				type="text"
				{...inputProps}
				className={`py-2 px-4 rounded-md shadow focus:outline-none focus:ring focus:border-indigo-400 bg-white dark:bg-gray-900 dark:text-gray-100 ${props.className}`}
			/>
			{errorMessage !== undefined && (
				<div className="text-red-700 dark:text-red-600 text-sm">
					{errorMessage}
				</div>
			)}
		</div>
	);
});

export default Input;
