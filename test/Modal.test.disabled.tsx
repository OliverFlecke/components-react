import React from 'react';
import Modal from '../src/Modal';
import renderer from 'react-test-renderer';

describe('Modal', () => {
	test.each([[true], [false]])('Render snapshot', open => {
		const tree = renderer
			.create(
				<Modal isOpen={open} onDismiss={() => console.log('dismiss')}>
					<div></div>
				</Modal>
			)
			.toJSON();
		expect(tree).toMatchSnapshot();
	});
});
