import firebase from '@react-native-firebase/app';
import auth from '@react-native-firebase/auth';


if (!firebase.apps.length) {
  firebase.initializeApp({});
}

export { auth };
