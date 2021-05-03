import React, { FC } from 'react';

export interface ModalProps {
	children: any;
	isOpen: boolean;
}

const Modal: FC<ModalProps> = ({ isOpen, children }: ModalProps) => {
	return (
		<div className="absolute top-0 left-0 w-screen h-screen">
			<div className={`h-full max-w-full ${isOpen ? 'center' : 'hidden'}`}>
				<div className="bg-white dark:bg-black rounded-md m-4">{children}</div>
			</div>
		</div>
	);
};

export default Modal;
