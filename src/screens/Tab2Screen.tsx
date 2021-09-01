import React, {useEffect} from 'react';
import {View, Text} from 'react-native';

const Tab2Screen = () => {
  useEffect(() => {
    console.log('tab2 effect');
  }, []);
  
  return (
    <View>
      <Text>Tab2Screen</Text>
    </View>
  );
};

export default Tab2Screen;
