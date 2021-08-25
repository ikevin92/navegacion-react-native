import React from 'react';
import {
  createDrawerNavigator,
  DrawerContentComponentProps,
  DrawerContentOptions,
  DrawerContentScrollView,
} from '@react-navigation/drawer';
import {View, Text, useWindowDimensions, Image} from 'react-native';
import StackNavigator from './StackNavigator';
import SettingsScreen from '../screens/SettingsScreen';
import {styles} from '../theme/appTheme';

const Drawer = createDrawerNavigator();

const MenuLateral = () => {
  // consultar las dimensiones de la pantalla
  const {width} = useWindowDimensions();

  return (
    <Drawer.Navigator
      drawerType={width >= 768 ? 'permanent' : 'front'}
      drawerContent={props => <MenuInterno {...props} />}>
      <Drawer.Screen name="StackNavigator" component={StackNavigator} />
      <Drawer.Screen name="SettingsScreen" component={SettingsScreen} />
    </Drawer.Navigator>
  );
};

export default MenuLateral;

const MenuInterno = (
  props: DrawerContentComponentProps<DrawerContentOptions>,
) => {
  return (
    <DrawerContentScrollView>
      <View
      style={styles.avatarContainer}
      >
        <Image
          source={{
            uri: 'https://thumbs.dreamstime.com/b/omita-al-avatar-placeholder-de-la-foto-icono-del-perfil-124557887.jpg',
          }}
          style={styles.avatar}
        />
      </View>
    </DrawerContentScrollView>
  );
};
