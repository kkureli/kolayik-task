import React from 'react';
import renderer from 'react-test-renderer';
import PersonalInformations from '../src/components/home/PersonalInformations';
import {mockUser} from '../src/data/MockData';

test('PersonalInformationscComponent renders correctly', () => {
  const tree = renderer
    .create(<PersonalInformations user={mockUser} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
