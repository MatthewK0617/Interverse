import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

let API_KEY = 'AIzaSyB2jdccCV-cD11OxMbjL19auWWn2aqG7dk';
let PROJECT_ID = 'interverse-eee99';

let config = {
  apiKey: API_KEY,
  authDomain: `${PROJECT_ID}.firebaseapp.com`,
  databaseURL: `https://${PROJECT_ID}.firebaseio.com`,
  projectId: PROJECT_ID,
  storageBucket: `${PROJECT_ID}.appspot.com`,
};
firebase.initializeApp(config);

const db = firebase.firestore();
const auth = firebase.auth();

export {db, auth};
