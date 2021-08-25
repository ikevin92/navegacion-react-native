import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {View, Text, useWindowDimensions} from 'react-native';
import StackNavigator from './StackNavigator';
import SettingsScreen from '../screens/SettingsScreen';

const Drawer = createDrawerNavigator();

const MenuLateralBasico = () => {
  // consultar las dimensiones de la pantalla
  const {width} = useWindowDimensions();

  return (
    <Drawer.Navigator
      drawerPosition="left"
      drawerType={width >= 768 ? 'permanent' : 'front'}>
      <Drawer.Screen
        name="StackNavigator"
        options={{title: 'Home'}}
        component={StackNavigator}
      />
      <Drawer.Screen
        name="SettingsScreen"
        options={{title: 'Settings'}}
        component={SettingsScreen}
      />
    </Drawer.Navigator>
  );
};

export default MenuLateralBasico;
