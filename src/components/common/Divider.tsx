import React, {FC} from 'react';
import {StyleSheet, View} from 'react-native';

const Divider: FC = () => {
  return <View style={styles.divider} />;
};

export default Divider;

const styles = StyleSheet.create({
  divider: {
    width: '100%',
    height: 1,
    backgroundColor: 'rgb(220,223,228)',
    marginTop: 25
  }
});
