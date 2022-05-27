import React, { forwardRef } from 'react';
import { insertClassName } from './utils/stringUtils';

export interface InputProps {
	label?: string;
	errorMessage?: string;
}

const Input = forwardRef<
	HTMLInputElement,
	InputProps & React.InputHTMLAttributes<HTMLInputElement>
>(({ label, errorMessage, className, ...inputProps }, ref) => (
	<div className="space-y-2">
		<label className="space-y-2">
			<span className="input-label">{label}</span>
			<input
				ref={ref}
				type="text"
				{...inputProps}
				className={`py-2 px-4 rounded-md shadow focus:outline-none focus:ring focus:border-indigo-400 bg-white dark:bg-gray-900 dark:text-gray-100${insertClassName(
					className
				)}`}
			/>
		</label>
		{errorMessage !== undefined && (
			<div className="text-red-700 dark:text-red-600 text-sm">
				{errorMessage}
			</div>
		)}
	</div>
));

export default Input;
