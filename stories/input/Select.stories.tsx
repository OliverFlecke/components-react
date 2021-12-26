import { Meta } from '@storybook/react';
import React from 'react';
import Select from '../../src/Select';
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
			<Select.Option value="A_value">A</Select.Option>
			<Select.Option value="B_value">B</Select.Option>
		</Select>
	</DarkModeToggle>
);

export const Groups = args => (
	<DarkModeToggle darkMode={args.darkMode}>
		<Select label="Cars" onSelection={x => console.debug(x)}>
			<Select.Group label="Swedish">
				<Select.Option value="volvo">Volvo</Select.Option>
				<Select.Option value="saab">Saab</Select.Option>
			</Select.Group>
			<Select.Group label="German">
				<Select.Option value="mercedes">Mercedes</Select.Option>
				<Select.Option value="audi">Audi</Select.Option>
			</Select.Group>
		</Select>
	</DarkModeToggle>
);
