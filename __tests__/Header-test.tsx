import React from 'react';
import renderer from 'react-test-renderer';
import Header from '../src/components/common/Header';

test('header renders correctly', () => {
  const tree = renderer.create(<Header />).toJSON();
  expect(tree).toMatchSnapshot();
});
