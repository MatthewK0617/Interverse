import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
  TextInput,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

let NewTouchableOpacity = () => {
  let [label, setLabel] = React.useState('');

  return (
    <TouchableOpacity style={styles.container}>
      <Text style={styles.text}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'blue',
    marginBottom: 12,
    paddingVertical: 12,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: 'blue',
  },
  text: {
    color: 'white',
    textAlign: 'center',
    height: 20,
  },
});
export default NewTouchableOpacity;
