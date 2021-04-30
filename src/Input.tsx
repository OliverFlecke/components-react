import React, { FC } from 'react';
import useId from './utils/useId';

export interface InputProps {
	placeholder?: string;
	label?: string;
}

const Input: FC<InputProps> = ({ placeholder, label }: InputProps) => {
	const id = useId('input');

	return (
		<>
			<label
				htmlFor={id}
				className="block text-gray-700 dark:text-gray-300 font-medium text-sm mb-1"
			>
				{label}
			</label>
			<input
				id={id}
				type="text"
				placeholder={placeholder}
				className="py-2 px-4 rounded-md shadow focus:outline-none focus:ring focus:border-indigo-400 bg-white dark:bg-gray-900 dark:text-gray-100"
			/>
		</>
	);
};

export default Input;
