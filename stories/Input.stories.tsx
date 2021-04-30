import { Meta, Story } from '@storybook/react';
import React from 'react';

import Input, { InputProps } from '../src/Input';
import ThemeDisplay from './ThemeDisplay';

export default {
	title: 'Components/Input',
	component: Input,
	argTypes: {
		backgroundColor: { control: 'color' },
	},
} as Meta;

const Template: Story<InputProps> = args => ThemeDisplay(<Input {...args} />);

export const Default = Template.bind({});
Default.args = {
	placeholder: 'Enter your email',
	label: 'Email',
};
