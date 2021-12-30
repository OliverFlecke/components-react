import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import renderer from 'react-test-renderer';
import Select, { SelectGroup, SelectOption } from '../src/Select';

Enzyme.configure({ adapter: new Adapter() });

describe('Select', () => {
	test('Render snapshot', () => {
		const tree = renderer
			.create(
				<Select>
					<SelectGroup label="values">
						<SelectOption value="1">1</SelectOption>
						<SelectOption value="2">2</SelectOption>
					</SelectGroup>
				</Select>
			)
			.toJSON();
		expect(tree).toMatchSnapshot();
	});
});
