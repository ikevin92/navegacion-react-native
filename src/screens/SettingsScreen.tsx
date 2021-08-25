import React from 'react';
import {View, Text} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {styles} from '../theme/appTheme';

const SettingsScreen = () => {
  // hook para el noch
  const insets = useSafeAreaInsets();

  return (
    <View
      style={{
        ...styles.globalMargin,
        marginTop: insets.top + 1,
      }}>
      <Text style={styles.title}>Settings Screen</Text>
    </View>
  );
};

export default SettingsScreen;
