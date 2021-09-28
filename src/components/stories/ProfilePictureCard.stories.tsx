import React from 'react';
import {storiesOf} from '@storybook/react-native';

import {mockUser} from '../../data/MockData';
import ProfilePictureCard from '../home/ProfilePictureCard';

storiesOf('Profile Picture Card ', module).add('top profile card', () => (
  <ProfilePictureCard user={mockUser} />
));
