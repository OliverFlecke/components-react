import React from 'react';
import Toggle from '../src/Toggle';
import renderer from 'react-test-renderer';

describe('Toggle', () => {
	test('Render snapshot', () => {
		const tree = renderer.create(<Toggle />).toJSON();
		expect(tree).toMatchSnapshot();
	});
});
