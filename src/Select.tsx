import React, { forwardRef, useCallback } from 'react';

export interface SelectProps {
	label: string;
	children: any[];
	onSelection?: (value: string) => void;
}

const Select = forwardRef<
	HTMLSelectElement,
	SelectProps & React.SelectHTMLAttributes<HTMLSelectElement>
>(({ label, children, onSelection, ...selectProps }, ref) => {
	const changed = useCallback(
		(e: React.ChangeEvent<HTMLSelectElement>) => {
			onSelection?.(e.currentTarget.value);
		},
		[onSelection]
	);

	return (
		<label className="flex flex-col space-y-2 text-black dark:text-gray-100">
			<span className="input-label">{label}</span>
			<select
				ref={ref}
				className="rounded-md px-4 py-2 bg-gray-100 dark:bg-gray-900 dark:text-white shadow focus:outline-none focus:ring focus:border-indigo-400"
				onChange={changed}
				{...selectProps}
			>
				{children}
			</select>
		</label>
	);
});

interface SelectOptionProps {
	value: any;
	children?: string;
}

export const SelectOption = ({ value, children }: SelectOptionProps) => (
	<option value={value}>{children ?? value}</option>
);

interface SelectGroupProps {
	label: string;
	children: any[];
}

export const SelectGroup = ({ children, label }: SelectGroupProps) => (
	<optgroup label={label}>{children}</optgroup>
);

export default Select as any;
