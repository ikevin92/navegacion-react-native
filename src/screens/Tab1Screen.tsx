import React, {useEffect} from 'react';
import {View, Text} from 'react-native';

const Tab1Screen = () => {
  useEffect(() => {
    console.log('tab1 effect');
  }, []);

  return (
    <View>
      <Text>Tab1Screen</Text>
    </View>
  );
};

export default Tab1Screen;
