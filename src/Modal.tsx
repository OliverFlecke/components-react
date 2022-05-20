import React, { FC, useEffect, useMemo } from 'react';
import ReactDOM from 'react-dom';

export interface ModalProps {
	children: any;
	isOpen: boolean;
	onDismiss?: () => void;
}

const Modal: FC<ModalProps> = props => {
	if (!props.isOpen) return null;

	return <Container {...props} />;
};

export default Modal;

const Container: FC<ModalProps> = ({ children, onDismiss }) => {
	const { node } = useNodeInRoot('modal-root', {
		className: 'absolute top-0 left-0 w-screen h-screen',
	});

	const render = (
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
	);

	return ReactDOM.createPortal(render, node);
};

function getOrCreateRoot(id: string): HTMLElement {
	let root = document.getElementById(id);

	if (!root) {
		const body = document.getElementsByTagName('body')[0];
		root = document.createElement('div');
		root.id = id;
		body.appendChild(root);
	}

	return root;
}

function useNodeInRoot(id: string, options?: unknown) {
	const node = useMemo(() => document.createElement('div'), []);
	if (options) {
		Object.assign(node, options);
	}

	useEffect(() => {
		const root = getOrCreateRoot(id);
		root.appendChild(node);

		return () => {
			root?.removeChild(node);
		};
	}, [node, id]);

	return { node };
}
