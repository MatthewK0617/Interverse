import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity, Image} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

let Login1 = ({navigation}) => {
  let volunteer = () => {
    navigation.navigate('Login');
  };

  let user = () => {
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require('../../assets/Logo.png')} />

      <View style={styles.touchables}>
        <TouchableOpacity style={styles.touchable} onPress={volunteer}>
          <Text styles={styles.txt}>Volunteer</Text>
        </TouchableOpacity>
        <View style={{height: 30}} />
        <TouchableOpacity style={styles.touchable} onPress={user}>
          <Text styles={styles.txt}>Student</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  logo: {
    flex: 1,
    width: '100%',
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  touchables: {
    flex: 1,
    justifyContent: 'center',
    width: '80%',
  },
  touchable: {
    height: 100,
    borderColor: 'silver',
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    borderRadius: 8,
  },
  txt: {
    color: 'white',
    fontSize: 500,
  },
});

export default Login1;
