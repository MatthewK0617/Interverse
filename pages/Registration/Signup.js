import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';

// import FormTextInput from '../components/FormTextInput';
// import NewTouchableOpacity from '../components/NewTouchableOpacity';
// import {db} from '../../firebase';

let signedUp = false;

let Signup = ({navigate}) => {
  // maybe remove go back option from login 2 (navigation)
  // and in settings when log out is pressed go to login
  let [email, setEmail] = React.useState('');
  let [username, setUsername] = React.useState('');
  let [name, setName] = React.useState('');
  let [password, setPassword] = React.useState('');

  return (
    <View style={styles.container}>
      {/* <Image style={styles.logo} source={require('../../assets/Logo.png')} /> */}
      <View style={styles.form}>
        <TextInput
          style={styles.textinput}
          value={email}
          onChangeText={email => setEmail(email)}
          placeholder="Email"
        />
        <TextInput
          style={styles.textinput}
          value={username}
          onChangeText={username => setUsername(username)}
          placeholder="Username"
        />
        <TextInput
          style={styles.textinput}
          value={name}
          onchangeText={name => setName(name)}
          placeholder="Name"
        />
        <TextInput
          style={styles.textinput}
          value={password}
          onchangeText={password => setPassword(password)}
          placeholder="Password"
        />
        <TouchableOpacity style={styles.enterform} onPress={() => {}}>
          <Text style={styles.text}>Sign up</Text>
        </TouchableOpacity>
        {/* goes to volunteerMain or userMain which will become 
        the main pages (figure out how to remove top nav bar) */}
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
  form: {
    flex: 1,
    justifyContent: 'center',
    width: '80%',
  },
  enterform: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'blue', // change it
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
  textinput: {
    height: 40,
    borderColor: 'silver',
    borderBottomWidth: 1,
    marginBottom: 20,
  },
});

export default Signup;
