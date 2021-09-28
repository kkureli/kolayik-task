import React, {FC} from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {User} from '../../models';
import Typography from '../common/Typography';

interface PPCardProps {
  user: User;
}

const ProfilePictureCard: FC<PPCardProps> = ({user: {image, title, name}}) => {
  return (
    <View style={styles.container}>
      <Image style={styles.avatar} source={image} />
      <Typography h3>{name}</Typography>
      <Typography subtitle gray>
        {title}
      </Typography>
    </View>
  );
};

export default ProfilePictureCard;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: 10
  },
  avatar: {
    width: 150,
    height: 150,
    resizeMode: 'contain'
  }
});
