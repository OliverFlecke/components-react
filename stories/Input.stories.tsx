import { Meta, Story } from '@storybook/react';
import React from 'react';
import Input, { InputProps } from '../src/Input';
import { DarkModeToggle } from './ThemeDisplay';

export default {
	title: 'Components/Input/Basic',
	component: Input,
	argTypes: {
		darkMode: { control: 'boolean' },
	},
} as Meta;

const Template: Story<InputProps & { darkMode: boolean }> = ({
	darkMode,
	...args
}) => (
	<DarkModeToggle darkMode={darkMode}>
		<Input {...args} />
	</DarkModeToggle>
);

export const Default = Template.bind({});
Default.args = {
	placeholder: 'Enter your email',
	label: 'Email',
};

export const Error = Template.bind({});
Error.args = {
	label: 'Email',
	value: 'abcd@1234',
	errorMessage: 'Invalid email address',
};
