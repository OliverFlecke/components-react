import { Meta, Story } from '@storybook/react';
import React from 'react';
import Button, { ButtonProps } from '../src/Button';
import { DarkModeToggle } from './ThemeDisplay';

export default {
	title: 'Components/Button',
	component: Button,
	argTypes: {
		darkMode: { control: 'boolean' },
	},
} as Meta;

const Template: Story<ButtonProps & { darkMode: boolean }> = ({
	darkMode,
	...args
}) => (
	<DarkModeToggle darkMode={darkMode}>
		<Button {...args} />
	</DarkModeToggle>
);

export const Primary = Template.bind({});
Primary.args = {
	children: 'Button',
	onClick: () => alert('You clicked a button!'),
};

export const Secondary = Template.bind({});
Secondary.args = {
	buttonType: 'Secondary',
	children: 'Secondary button',
};

export const Disabled = Template.bind({});
Disabled.args = {
	disabled: true,
	children: 'Disabled',
	onClick: () => alert('Button is disabled, so this cannot be fired'),
};
