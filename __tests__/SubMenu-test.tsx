import React from 'react';
import renderer from 'react-test-renderer';
import SubMenu from '../src/components/home/SubMenu';
import {subMenu} from '../src/data/MockData';

test('subMenu renders correctly', () => {
  const tree = renderer.create(<SubMenu menuList={subMenu} />).toJSON();
  expect(tree).toMatchSnapshot();
});
