import React, { FC } from 'react';
import useId from './utils/useId';

export interface InputProps
	extends React.DetailedHTMLProps<
		React.InputHTMLAttributes<HTMLInputElement>,
		HTMLInputElement
	> {
	label?: string;
	errorMessage?: string;
}

const Input: FC<InputProps> = (props: InputProps) => {
	const { label, errorMessage } = props;
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
				id={id}
				type="text"
				className="py-2 px-4 rounded-md shadow focus:outline-none focus:ring focus:border-indigo-400 bg-white dark:bg-gray-900 dark:text-gray-100"
				{...props}
			/>
			{errorMessage !== undefined && (
				<div className="text-red-700 dark:text-red-600 text-sm">
					{errorMessage}
				</div>
			)}
		</div>
	);
};

export default Input;
