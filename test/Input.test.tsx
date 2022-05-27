import React from 'react';
import renderer from 'react-test-renderer';
import Input from '../src/Input';

describe('Input', () => {
	test('render snapshot', () => {
		const tree = renderer.create(<Input label="Email" />);
		expect(tree.toJSON()).toMatchSnapshot();
	});

	test('render snapshot with error message', () => {
		const tree = renderer.create(
			<Input label="Email" errorMessage="Invalid email address" />
		);
		expect(tree.toJSON()).toMatchSnapshot();
	});
});
