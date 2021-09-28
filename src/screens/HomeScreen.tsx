import React, {FC} from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import Divider from '../components/common/Divider';
import Header from '../components/common/Header';
import ContactOptions from '../components/home/ContactOptions';
import PersonalInformations from '../components/home/PersonalInformations';
import ProfilePictureCard from '../components/home/ProfilePictureCard';
import SubMenu from '../components/home/SubMenu';
import {
  mockUser,
  contactOptions as contactMethods,
  subMenu as subList
} from '../data/MockData';

const HomeScreen: FC = () => {
  return (
    <>
      <Header canGoBack isMore />
      <Divider />
      <ScrollView contentContainerStyle={styles.container}>
        <ProfilePictureCard user={mockUser} />
        <ContactOptions methods={contactMethods} />
        <PersonalInformations user={mockUser} />
        <Divider />
        <SubMenu menuList={subList} />
      </ScrollView>
    </>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    paddingBottom: 60
  }
});
