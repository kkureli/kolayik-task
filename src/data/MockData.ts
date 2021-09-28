import {ContactMethods, SubMenuModel, User} from '../models';
const avatar = require('../assets/images/Avatar.png');

const mockUser: User = {
  image: avatar,
  name: 'Adnan Burhan',
  title: 'Product Designer',
  email: 'adnan@burhan.com',
  phoneNumber: 5360700195,
  department: 'Product',
  location: 'Istanbul',
  employmentStartDate: '25 Jan 2019',
  manager: 'Yunus Türkoğlu'
};

const contactOptions: ContactMethods[] = [
  {
    title: 'Email',
    icon: require('../assets/icons/contactOptions/emailIcon.png'),
    id: 'email'
  },
  {
    title: 'Call',
    icon: require('../assets/icons/contactOptions/phoneCallIcon.png'),
    id: 'call'
  }
];

const subMenu: SubMenuModel[] = [
  {
    title: 'Requests',
    icon: require('../assets/icons/subMenuIcons/requestsIcon.png'),
    id: '1',
    onPress: () => console.log('navigation.navigate(RequestsScreen)')
  },
  {
    title: 'Information',
    icon: require('../assets/icons/subMenuIcons/infoIcon.png'),
    id: '2',
    onPress: () => console.log('navigation.navigate(InformationScreen)')
  },
  {
    title: 'Career',
    icon: require('../assets/icons/subMenuIcons/careerIcon.png'),
    id: '3',
    onPress: () => console.log('navigation.navigate(InformationScreen)')
  },
  {
    title: 'Leaves',
    icon: require('../assets/icons/subMenuIcons/leavesIcon.png'),
    id: '4',
    onPress: () => console.log('navigation.navigate(LeavesScreen)')
  },
  {
    title: 'Assets',
    icon: require('../assets/icons/subMenuIcons/assetsIcon.png'),
    id: '5',
    onPress: () => console.log('navigation.navigate(AssetsScreen)')
  },
  {
    title: 'Documents',
    icon: require('../assets/icons/subMenuIcons/documentsIcon.png'),
    id: '6',
    onPress: () => console.log('navigation.navigate(DocumentsScreen)')
  }
];

export {mockUser, subMenu, contactOptions};
