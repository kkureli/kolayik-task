import React, {FC} from 'react';
import {Image, Linking, StyleSheet, TouchableOpacity, View} from 'react-native';
import {ContactMethods} from '../../models';
import Typography from '../common/Typography';

interface ContactProps {
  methods: ContactMethods[];
}

const ContactOptions: FC<ContactProps> = ({methods}) => {
  const onContact = (id: string) => {
    switch (id) {
      case 'email':
        console.log('Send Mail');
        //Linking.openURL(`mailto:${props.user.email}`)
        break;
      case 'call':
        console.log('Call');
        //Linking.openURL(`tel:${phoneNumber}`)
        break;
      default:
        break;
    }
  };

  return (
    <View style={styles.container}>
      {methods.map(method => {
        return (
          <TouchableOpacity
            onPress={() => onContact(method.id)}
            style={styles.option}
            key={method.id}>
            <Image style={styles.icon} source={method.icon} />
            <Typography subtitle medium center primary>
              {method.title}
            </Typography>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default ContactOptions;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 30
  },
  icon: {width: 70, height: 70, resizeMode: 'contain', marginBottom: 10},
  option: {
    marginHorizontal: 5
  }
});
