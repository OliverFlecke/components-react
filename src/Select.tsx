import React, { useCallback } from 'react';
import { useId } from '.';

export interface SelectProps
	extends React.SelectHTMLAttributes<HTMLSelectElement> {
	label: string;
	children: any[];
	onSelection?: (value: string) => void;
}

const Select = ({
	label,
	children,
	onSelection,
	...selectProps
}: SelectProps) => {
	const id = useId('select');
	const changed = useCallback(
		(e: React.ChangeEvent<HTMLSelectElement>) => {
			onSelection?.(e.currentTarget.value);
		},
		[onSelection]
	);

	return (
		<div className="flex flex-col space-y-2">
			<label htmlFor={id} className="text-black dark:text-gray-100">
				{label}
			</label>
			<select
				id={id}
				className="rounded px-4 py-2 bg-gray-100 dark:bg-gray-900 dark:text-white"
				onChange={changed}
				{...selectProps}
			>
				{children}
			</select>
		</div>
	);
};

interface OptionProps {
	value: any;
	children?: string;
}

const Option = ({ value, children }: OptionProps) => (
	<option value={value}>{children ?? value}</option>
);
Select.Option = Option;

interface GroupProps {
	label: string;
	children: any[];
}

const Group = ({ children, label }: GroupProps) => (
	<optgroup label={label}>{children}</optgroup>
);
Select.Group = Group;

export default Select;
