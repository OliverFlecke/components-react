import { Meta } from '@storybook/react';
import React from 'react';
import Toggle from '../src/Toggle';
import { DarkModeToggle } from './ThemeDisplay';

export default {
	title: 'Components/Toggle',
	component: Toggle,
	argTypes: {
		darkMode: { control: 'boolean' },
	},
} as Meta;

export const Default = ({ darkMode, ...args }) => (
	<DarkModeToggle darkMode={darkMode}>
		<Toggle />
	</DarkModeToggle>
);
