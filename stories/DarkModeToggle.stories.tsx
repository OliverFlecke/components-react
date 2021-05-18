import { useArgs } from '@storybook/client-api';
import { Meta } from '@storybook/react';
import React from 'react';
import DarkModeToggle from '../src/DarkModeToggle';

export default {
	title: 'Components/Input/DarkModeToggle',
	component: DarkModeToggle,
	argTypes: {
		darkMode: { control: 'boolean' },
	},
} as Meta;

const View = () => {
	const [{ darkMode }, updateArgs] = useArgs();

	return (
		<DarkModeToggle
			darkMode={darkMode}
			onToggle={() => updateArgs({ darkMode: !darkMode })}
		/>
	);
};

export const Default = View.bind({});
