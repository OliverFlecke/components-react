import React, { FC } from 'react';

export interface ModalProps {
	children: any;
	isOpen: boolean;
	onDismiss?: () => void;
}

const Modal: FC<ModalProps> = ({ isOpen, children, onDismiss }: ModalProps) => {
	if (!isOpen) return null;

	return (
		<div className="absolute top-0 left-0 w-screen h-screen">
			<div
				className="h-full max-w-full center bg-opacity-50 bg-white dark:bg-opacity-50 dark:bg-black"
				onClick={onDismiss}
			>
				<div
					className="bg-white dark:bg-black rounded-md m-4"
					onClick={e => e.stopPropagation()}
				>
					{children}
				</div>
			</div>
		</div>
	);
};

export default Modal;
