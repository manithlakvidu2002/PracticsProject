import firebase from '@react-native-firebase/app';
import '@react-native-firebase/database';
import 'firebase/database';  
import 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyATfYhkpJWsKpwUwjOaxT20V3jpnPkiGyI",
  authDomain: "practicsproject.firebaseapp.com",
  databaseURL: "https://practicsproject-default-rtdb.firebaseio.com/",
  projectId: "practicsproject",
  storageBucket: "practicsproject.appspot.com",
  messagingSenderId: "406429456035",
  appId: "com.practicsproject",
  measurementId: "YOUR_MEASUREMENT_ID"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase;

const db = firebase.database();  
const storage = firebase.storage();  

export { db, storage };


