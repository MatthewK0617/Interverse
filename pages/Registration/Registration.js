import React from 'react';
import 'react-native-gesture-handler';
import {StyleSheet, View, Text, Modal, TouchableOpacity} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Login2 from './Login2';
import Login1 from './Login1';
import Signup from './Signup';

const Stack = createStackNavigator();

let Registration = () => {
  let [login1Visible, setLogin1Visible] = React.useState(false); // false if logged out or not signed in
  let [login2Visible, setLogin2Visible] = React.useState(true);
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Role" component={Login1} />
        <Stack.Screen name="Login" component={Login2} />
        <Stack.Screen name="Signup" component={Signup} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  logout: {
    fontSize: 50,
    alignSelf: 'flex-end',
  },
});

export default Registration;
