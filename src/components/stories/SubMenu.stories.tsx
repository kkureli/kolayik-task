import React from 'react';
import {storiesOf} from '@storybook/react-native';

import {subMenu} from '../../data/MockData';
import SubMenu from '../home/SubMenu';

storiesOf('SubMenu ', module).add('sub menu items', () => (
  <SubMenu menuList={subMenu} />
));
