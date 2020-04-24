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
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

let FormTextInput = () => {
  return <TextInput selectionColor="gray" style={styles.textinput} />;
};

const styles = StyleSheet.create({
  textinput: {
    height: 40,
    borderColor: 'silver',
    borderBottomWidth: 1,
    marginBottom: 20,
  },
});
export default FormTextInput;
