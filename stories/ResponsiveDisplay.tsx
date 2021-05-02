import React, { FC } from 'react';
import ReactDOMServer from 'react-dom/server';
import useId from '../src/utils/useId';

export type Size = 'Small' | 'Medium' | 'Large' | 'Extra large';

interface ResponsiveDisplayProps {
	size?: Size;
	children: any;
}

const ResponsiveDisplay: FC<ResponsiveDisplayProps> = ({ size, children }) => {
	const title = useId('title');

	return (
		<iframe
			title={title}
			width="100%"
			height="100%"
			srcDoc={ReactDOMServer.renderToStaticMarkup(
				<div className={getClassName(size)}>{children}</div>
			)}
		/>
	);
};

export default ResponsiveDisplay;

function getClassName(size?: Size) {
	switch (size) {
		case 'Small':
			return 'max-w-screen-sm';
		case 'Medium':
			return 'max-w-screen-md';
		case 'Large':
			return 'max-w-screen-lg';
		case 'Extra large':
			return 'max-w-screen-xl';
	}
}
