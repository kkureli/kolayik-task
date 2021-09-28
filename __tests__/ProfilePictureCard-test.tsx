import React from 'react';
import renderer from 'react-test-renderer';

import ProfilePictureCard from '../src/components/home/ProfilePictureCard';
import {mockUser} from '../src/data/MockData';

test('ProfilePictureCard renders correctly', () => {
  const tree = renderer.create(<ProfilePictureCard user={mockUser} />).toJSON();
  expect(tree).toMatchSnapshot();
});
