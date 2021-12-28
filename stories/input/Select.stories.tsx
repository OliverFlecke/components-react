import { Meta } from '@storybook/react';
import React from 'react';
import Select, { SelectGroup, SelectOption } from '../../src/Select';
import { DarkModeToggle } from '../ThemeDisplay';

export default {
	title: 'Components/Input/Select',
	component: Select,
	argTypes: {
		darkMode: { control: 'boolean' },
	},
} as Meta;

export const Simple = args => (
	<DarkModeToggle darkMode={args.darkMode}>
		<Select label="Test" onSelection={x => console.debug(`Selected: ${x}`)}>
			<SelectOption value="A_value">A</SelectOption>
			<SelectOption value="B_value">B</SelectOption>
		</Select>
	</DarkModeToggle>
);

export const Groups = args => (
	<DarkModeToggle darkMode={args.darkMode}>
		<Select label="Cars" onSelection={x => console.debug(x)}>
			<SelectGroup label="Swedish">
				<SelectOption value="volvo">Volvo</SelectOption>
				<SelectOption value="saab">Saab</SelectOption>
			</SelectGroup>
			<SelectGroup label="German">
				<SelectOption value="mercedes">Mercedes</SelectOption>
				<SelectOption value="audi">Audi</SelectOption>
			</SelectGroup>
		</Select>
	</DarkModeToggle>
);
