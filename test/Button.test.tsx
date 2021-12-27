import React from 'react';
import * as ReactDOM from 'react-dom';
import Button, { ButtonType } from '../src/Button';
import renderer from 'react-test-renderer';

describe('Button', () => {
	test('renders without crashing', () => {
		const div = document.createElement('div');
		ReactDOM.render(<Button />, div);
		ReactDOM.unmountComponentAtNode(div);
	});

	test('render disabled button', () => {
		const div = document.createElement('div');
		ReactDOM.render(<Button disabled />, div);
		ReactDOM.unmountComponentAtNode(div);
	});

	test.each([
		'Primary',
		'Secondary',
		'Success',
		'Transparent',
		'Warning',
		'Danger',
		'Link',
	] as ButtonType[])('render button types', (type: ButtonType) => {
		const div = document.createElement('div');
		ReactDOM.render(<Button buttonType={type} />, div);
		ReactDOM.unmountComponentAtNode(div);
	});
});

describe('Button snapshots', () => {
	test.each([
		'Primary',
		'Secondary',
		'Success',
		'Transparent',
		'Warning',
		'Danger',
		'Link',
	] as ButtonType[])('renders correctly', (type: ButtonType) => {
		const tree = renderer
			.create(<Button buttonType={type}>Click me!</Button>)
			.toJSON();
		expect(tree).toMatchSnapshot();
	});
});
