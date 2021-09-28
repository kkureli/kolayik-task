import React, {FC} from 'react';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import {SubMenuModel} from '../../models';
import Typography from '../common/Typography';

interface SubMenuProps {
  menuList: SubMenuModel[];
}

interface RenderSubMenuProps {
  item: SubMenuModel;
}

const RenderSubMenu: FC<RenderSubMenuProps> = ({item}) => {
  return (
    <TouchableOpacity
      style={[styles.subContainer, styles.row]}
      onPress={() => item.onPress()}>
      <View style={styles.row}>
        <Image style={styles.icon} source={item.icon} />
        <Typography style={{marginLeft: 20}}>{item.title}</Typography>
      </View>
      <Image
        resizeMode="contain"
        style={styles.nextIcon}
        source={require('../../assets/icons/common/nextIcon.png')}
      />
    </TouchableOpacity>
  );
};

const SubMenu: FC<SubMenuProps> = ({menuList}) => {
  return (
    <View style={styles.container}>
      {menuList.map(item => (
        <RenderSubMenu key={item.id} item={item} />
      ))}
    </View>
  );
};

export default SubMenu;

const styles = StyleSheet.create({
  container: {
    marginTop: 15
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  icon: {
    width: 24,
    height: 24
  },
  nextIcon: {
    width: 20,
    height: 20
  },
  subContainer: {
    marginVertical: 15,
    marginHorizontal: 20
  }
});
