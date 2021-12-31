import React from 'react';
import DarkModeToggle from '../src/DarkModeToggle';
import renderer from 'react-test-renderer';

describe('DarkModeToggle', () => {
	test.each([true, false])('render snapshot', isDarkMode => {
		const tree = renderer.create(<DarkModeToggle darkMode={isDarkMode} />);
		expect(tree.toJSON()).toMatchSnapshot();
	});
});
