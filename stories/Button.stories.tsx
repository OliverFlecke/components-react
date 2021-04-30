import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Button, ButtonProps } from '../src/Button';

export default {
	title: 'Components/Button',
	component: Button,
	argTypes: {
		backgroundColor: { control: 'color' },
	},
} as Meta;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ThemeDisplay = (component: any) => (
	<div className="flex flex-row justify-between">
		<div className="bg-white w-1/2 p-8 center flex-row">{component}</div>
		<div className="dark bg-black w-1/2 p-8 center flex-row">{component}</div>
	</div>
);

const Template: Story<ButtonProps> = args => ThemeDisplay(<Button {...args} />);

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
