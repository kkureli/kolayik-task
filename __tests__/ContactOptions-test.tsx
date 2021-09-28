import React from 'react';
import renderer from 'react-test-renderer';
import ContactOptions from '../src/components/home/ContactOptions';
import {contactOptions} from '../src/data/MockData';

test('contactOptions renders correctly', () => {
  const tree = renderer
    .create(<ContactOptions methods={contactOptions} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
