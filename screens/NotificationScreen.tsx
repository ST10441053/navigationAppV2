import * as React from 'react';
import { Button, View, StyleSheet } from 'react-native';
import {  NativeStackNavigationProp } from '@react-navigation/native-stack';
import {RootStackParamList} from '../Types/navigation';




type ScreenProps<T extends keyof RootStackParamList> = {
  navigation: NativeStackNavigationProp<RootStackParamList, T>;
};
function NotificationsScreen({ navigation }: ScreenProps<'Notifications'>) {
  return (
    <View style={styles.container}>
      <Button
        title="Go to Settings"
        onPress={() => navigation.navigate('Settings')}
      />
      <Button title="Go back" onPress={() => navigation.goBack()} />
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

export default NotificationsScreen;