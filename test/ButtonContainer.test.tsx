import React from 'react';
import renderer from 'react-test-renderer';
import ButtonContainer, { Position } from '../src/ButtonContainer';

describe('ButtonContainer', () => {
	test.each(['Left', 'Right', 'Center'] as Position[])(
		'Render snapshot of container in each possible position',
		(position: Position) => {
			const tree = renderer
				.create(
					<ButtonContainer position={position}>Some content</ButtonContainer>
				)
				.toJSON();
			expect(tree).toMatchSnapshot();
		}
	);

	test('With custom class', () => {
		const tree = renderer.create(
			<ButtonContainer className="custom-class">Any content</ButtonContainer>
		);
		expect(tree.toJSON()).toMatchSnapshot();
	});
});
