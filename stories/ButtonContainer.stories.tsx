import { Meta } from '@storybook/react';
import React from 'react';
import Button from '../src/Button';
import ButtonContainer from '../src/ButtonContainer';
import ThemeDisplay from './ThemeDisplay';

export default {
	title: 'Components/ButtonContainer',
	component: ButtonContainer,
	argTypes: {
		position: {
			control: {
				type: 'radio',
				options: ['Left', 'Center', 'Right'],
			},
		},
	},
} as Meta;

export const Container = args =>
	ThemeDisplay(
		<ButtonContainer position={args.position}>
			<Button buttonType="Transparent">Cancel</Button>
			<Button>Download</Button>
		</ButtonContainer>
	);

Container.args = {
	position: 'Right',
};
