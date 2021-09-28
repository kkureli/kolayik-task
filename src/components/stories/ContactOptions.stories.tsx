import React from 'react';
import {storiesOf} from '@storybook/react-native';

import {contactOptions} from '../../data/MockData';
import ContactOptions from '../home/ContactOptions';

storiesOf('Contact Options', module).add('all contact buttons', () => (
  <ContactOptions methods={contactOptions} />
));
