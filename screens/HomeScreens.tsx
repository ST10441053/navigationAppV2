import * as React from 'react';
import { Button, View, StyleSheet } from 'react-native';
import {  NativeStackNavigationProp } from '@react-navigation/native-stack';
import {RootStackParamList, ScreenProps} from '../Types/navigation';


type ScreenProps<T extends keyof RootStackParamList> = {
  navigation: NativeStackNavigationProp<RootStackParamList, T>;
};

function HomeScreen({ navigation }: ScreenProps<'Home'>) {

  // declare all the state variable.

  // arraow loadMenu  - loadArray - calculate stuff

  // useEffect
  return (
    <View style={styles.container}>
      <Button
        title="Go to Profile"
        onPress={() => navigation.navigate('Profile')}
      />

      {/*
      LOGO
      navigation
      total + average
      clent details
      prepared menu
      */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default HomeScreen;