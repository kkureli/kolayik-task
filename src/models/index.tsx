import {ImageSourcePropType} from 'react-native';

export interface User {
  image: ImageSourcePropType;
  name: string;
  title: string;
  email: string;
  phoneNumber: number;
  department: string;
  location: string;
  employmentStartDate: string;
  manager: string;
}

export interface ContactMethods {
  title: string;
  icon: ImageSourcePropType;
  id: string;
}

export interface SubMenuModel {
  title: string;
  icon: string;
  id: string;
  onPress: Function;
}
