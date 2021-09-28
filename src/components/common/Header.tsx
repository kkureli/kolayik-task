import React, {FC} from 'react';
import {Image, SafeAreaView, StyleSheet, TouchableOpacity} from 'react-native';
import {hitSlop} from '../../theme/constants';
import Typography from './Typography';

interface HeaderProps {
  canGoBack?: boolean;
  isMore?: boolean;
  title?: string;
  onBackPress?: Function;
  onMorePress?: Function;
}

const Header: FC<HeaderProps> = ({
  canGoBack,
  isMore,
  title,
  onBackPress,
  onMorePress
}) => {
  return (
    <SafeAreaView style={styles.container}>
      {canGoBack && (
        <TouchableOpacity
          hitSlop={hitSlop}
          onPress={() =>
            onBackPress ? onBackPress() : console.log('Back pressed')
          }>
          <Image
            resizeMode="center"
            style={styles.icon}
            source={require('../../assets/icons/headerIcons/backIcon.png')}
          />
        </TouchableOpacity>
      )}
      {title && <Typography bold>{title}</Typography>}
      {isMore && (
        <TouchableOpacity
          hitSlop={hitSlop}
          onPress={() =>
            onMorePress ? onMorePress() : console.log('More pressed')
          }>
          <Image
            resizeMode="center"
            style={styles.icon}
            source={require('../../assets/icons/headerIcons/moreIcon.png')}
          />
        </TouchableOpacity>
      )}
    </SafeAreaView>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 10
  },
  icon: {width: 24, height: 24}
});
