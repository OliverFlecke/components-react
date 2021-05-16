import { Meta } from '@storybook/react';
import React from 'react';
import Button from '../src/Button';
import ButtonContainer from '../src/ButtonContainer';
import { DarkModeToggle } from './ThemeDisplay';

export default {
	title: 'Components/ButtonContainer',
	component: ButtonContainer,
	argTypes: {
		darkMode: { control: 'boolean' },
		position: {
			control: {
				type: 'radio',
				options: ['Left', 'Center', 'Right'],
			},
		},
	},
} as Meta;

export const Container = args => (
	<DarkModeToggle darkMode={args.darkMode}>
		<ButtonContainer position={args.position}>
			<Button buttonType="Transparent">Cancel</Button>
			<Button>Download</Button>
		</ButtonContainer>
	</DarkModeToggle>
);

Container.args = {
	position: 'Right',
};
