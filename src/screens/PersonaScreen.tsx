import {StackScreenProps} from '@react-navigation/stack';
import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import {RookStackParams} from '../navigator/StackNavigator';
import {styles} from '../theme/appTheme';

// interface RouteParams {
//   id: number;
//   nombre: string;
// }

interface Props extends StackScreenProps<RookStackParams, 'PersonaScreen'> {}

const PersonaScreen = ({route, navigation}: Props) => {
  // console.log(JSON.stringify(props, null, 2));
  // const params = route.params as RouteParams; alternativo
  const params = route.params;

  useEffect(() => {
    navigation.setOptions({
      title: params.nombre,
    });
  }, []);

  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>{JSON.stringify(params, null, 3)}</Text>
    </View>
  );
};

export default PersonaScreen;
