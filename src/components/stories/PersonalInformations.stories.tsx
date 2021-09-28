import React from 'react';
import {storiesOf} from '@storybook/react-native';

import {mockUser} from '../../data/MockData';
import PersonalInformations from '../home/PersonalInformations';

storiesOf('Personal Informations', module).add('all informations', () => (
  <PersonalInformations user={mockUser} />
));
