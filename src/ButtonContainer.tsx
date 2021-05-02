import React, { FC } from 'react';

type Position = 'Left' | 'Right' | 'Center';

export interface ButtonContainerProps {
	position?: Position;
	className?: string;
	children: any;
}

const ButtonContainer: FC<ButtonContainerProps> = ({
	position,
	className,
	children,
}) => (
	<div
		className={`w-full flex flex-row rounded-md space-x-4 p-4 bg-gray-50 dark:bg-gray-900 ${getPositionClass(
			position
		)} ${className}`}
	>
		{children}
	</div>
);

export default ButtonContainer;

function getPositionClass(position?: Position) {
	switch (position) {
		case 'Left':
			return 'justify-start';
		case 'Center':
			return 'justify-center';

		case 'Right':
		default:
			return 'justify-end';
	}
}
