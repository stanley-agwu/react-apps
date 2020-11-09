import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB4nae9kDCACPmD4rmB8NIZuRoC11pDA6Q",
    authDomain: "project-mgt-app-13d09.firebaseapp.com",
    databaseURL: "https://project-mgt-app-13d09.firebaseio.com",
    projectId: "project-mgt-app-13d09",
    storageBucket: "project-mgt-app-13d09.appspot.com",
    messagingSenderId: "665423833065",
    appId: "1:665423833065:web:ae30e4335a14c49823cd78",
    measurementId: "G-9SKRK019F9"
  };

  firebase.initializeApp(firebaseConfig);
  firebase.firestore().settings({ timestampsInSnapshots: true });

  export default firebase;