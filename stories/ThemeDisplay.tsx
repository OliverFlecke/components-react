import React from 'react';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ThemeDisplay = (component: any) => (
	<div className="flex flex-row justify-between">
		<div className="bg-gradient-to-r from-purple-50 to-purple-100 w-1/2 p-8 center">
			<div className="w-full">{component}</div>
		</div>
		<div className="dark bg-gradient-to-r from-gray-900 to-purple-900 w-1/2 p-8 center">
			<div className="w-full">{component}</div>
		</div>
	</div>
);

export default ThemeDisplay;

export const DarkModeToggle = ({ children, darkMode }) => (
	<div className={`${darkMode ? 'dark' : ''}`}>{children}</div>
);
