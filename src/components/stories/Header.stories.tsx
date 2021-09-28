import React from 'react';
import {storiesOf} from '@storybook/react-native';
import Header from '../common/Header';
import {action} from '@storybook/addon-actions';

storiesOf('Header', module)
  //   .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('shows back and more options button', () => (
    <Header
      onMorePress={action('More Pressed!')}
      onBackPress={action('Back Pressed!')}
      isMore
      canGoBack
    />
  ))
  .add('with only back button', () => (
    <Header onBackPress={action('Back Pressed!')} canGoBack />
  ))
  .add('with only more options icon', () => (
    <Header onMorePress={action('More Pressed!')} isMore />
  ))
  .add('with back, more and title ', () => (
    <Header
      onBackPress={action('Back Pressed!')}
      onMorePress={action('More Pressed!')}
      title="Test"
      isMore
      canGoBack
    />
  ));
