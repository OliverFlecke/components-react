import { useArgs } from '@storybook/addons';
import { Meta } from '@storybook/react';
import React from 'react';

import Button from '../src/Button';
import ButtonContainer from '../src/ButtonContainer';
import Modal from '../src/Modal';
import { DarkModeToggle } from './ThemeDisplay';

export default {
	title: 'Components/Modal',
	component: Modal,
	argTypes: {
		isOpen: { control: 'boolean' },
		darkMode: { control: 'boolean' },
		size: {
			control: {
				type: 'radio',
				options: ['Small', 'Medium', 'Large', 'Extra large'],
			},
		},
	},
} as Meta;

export const Default = args => (
	<DarkModeToggle darkMode={args.darkMode}>
		<Modal isOpen={args.isOpen}>
			<div className="p-4">
				<h2 className="text-lg font-bold text-gray-700 dark:text-gray-300">
					Title
				</h2>
				<p className="text-black dark:text-gray-100">
					Here you can put whatever.
				</p>
			</div>
		</Modal>
	</DarkModeToggle>
);

Default.args = {
	isOpen: true,
};

export const WithButtons = args => {
	const [{ isOpen }, updateArgs] = useArgs();
	const close = () => updateArgs({ isOpen: false });

	return (
		<DarkModeToggle darkMode={args.darkMode}>
			<Modal isOpen={isOpen} onDismiss={close}>
				<>
					<div className="p-4">
						<h2 className="text-lg font-bold text-gray-700 dark:text-gray-200">
							Download file
						</h2>
						<p className="text-black dark:text-white">
							Do you want to download the selected file?
						</p>
					</div>
					<ButtonContainer>
						<Button buttonType="Transparent" onClick={close}>
							Cancel
						</Button>
						<Button>Download</Button>
					</ButtonContainer>
				</>
			</Modal>
		</DarkModeToggle>
	);
};

WithButtons.args = {
	isOpen: true,
};

export const Wide = args => (
	<Modal isOpen={args.isOpen}>
		<div className="p-4">
			<h2 className="text-lg font-bold text-gray-700 dark:text-gray-200">
				A very wide dialog
			</h2>
			<p className="text-black dark:text-white">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris commodo
				arcu et justo convallis iaculis. Aliquam erat volutpat. Curabitur in
				interdum quam. Nam sed risus ac risus iaculis imperdiet. Aenean
				fringilla magna nec porta bibendum. Phasellus vehicula euismod nisl
				euismod porttitor. Nunc at libero mauris. Suspendisse fringilla, tellus
				eu laoreet sagittis, augue enim porta dui, vel posuere ante nulla
				facilisis dolor. Aenean leo augue, congue a condimentum sit amet,
				lacinia sollicitudin diam. Phasellus eu est sagittis, dictum est vitae,
				fringilla sapien. Phasellus finibus nulla at nisl ultrices mollis. Sed
				consectetur feugiat massa, vitae pulvinar mauris. Nam blandit faucibus
				nisl, at consequat augue finibus a. Donec non eleifend tortor. Duis
				venenatis lectus sed dolor commodo, sed dignissim odio molestie. Integer
				vitae odio varius, interdum tellus et, blandit nulla. Proin varius urna
				consequat sollicitudin tristique. Proin sit amet gravida quam, a
				pharetra felis. Nunc molestie justo volutpat risus accumsan ultrices.
				Curabitur neque magna, ullamcorper eu diam vel, convallis laoreet neque.
				Suspendisse semper a nisl vel vulputate. Nullam quis nulla sit amet ex
				mollis sodales eu vel odio. Aliquam sit amet varius nunc. Cras purus
				risus, volutpat sed dolor nec, vestibulum finibus felis. Praesent ut
				viverra purus. Suspendisse vitae ex a risus pretium.
			</p>
		</div>
	</Modal>
);

Wide.args = {
	isOpen: true,
};
