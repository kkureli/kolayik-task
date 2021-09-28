//to disable storybook, you can set LOAD_STORYBOOK false from src/config/index.js

import React, {FC} from 'react';
import config from './src/config';
import HomeScreen from './src/screens/HomeScreen';
import StorybookUI from './storybook';

const App: FC = () => {
  return (
    <>
      <HomeScreen />
    </>
  );
};

export default config.LOAD_STORYBOOK === true ? StorybookUI : App;
