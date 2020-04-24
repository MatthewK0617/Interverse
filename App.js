import React from 'react';
import {StyleSheet, View, Text, Modal, TouchableOpacity} from 'react-native';
import {auth} from './firebase';

// import Login2 from './pages/Registration/Login2';
// import Login1 from './pages/Registration/Login1';
import Registration from './pages/Registration/Registration';

let App = () => {
  let [loggedIn, setLoggedIn] = React.useState(false);
  useEffect(() => {
    auth.onAuthStateChanged(user => {
      if (user) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
    });
  }, []);

  return (
    <View style={styles.container}>
      {/* <Modal animationType="none" transparent={false} visible={login1Visible}>
        <Login1
          setLogin1Visible={setLogin1Visible}
          setLogin2Visible={setLogin2Visible}
        />
      </Modal>
      <Modal animationType="none" transparent={false} visible={login2Visible}>
        <Login2
          setLogin2Visible={setLogin2Visible}
          setLogin1Visible={setLogin1Visible}
        />
      </Modal>

      <TouchableOpacity onPress={() => setLogin1Visible(true)}>
        <Text style={styles.logout}>Log out</Text>
      </TouchableOpacity> */}
      <Registration />
    </View>
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

export default App;
