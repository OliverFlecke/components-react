import React from 'react';
import { createRoot } from 'react-dom/client';
import renderer from 'react-test-renderer';
import Button, { ButtonType } from '../src/Button';

describe.skip('Button', () => {
	test('renders without crashing', () => {
		const root = createRoot(document.createElement('div'));
		root.render(<Button />);
		root.unmount();
	});

	test('render disabled button', () => {
		const root = createRoot(document.createElement('div'));
		root.render(<Button disabled />);
		root.unmount();
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
		const root = createRoot(document.createElement('div'));
		root.render(<Button buttonType={type} />);
		root.unmount();
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
