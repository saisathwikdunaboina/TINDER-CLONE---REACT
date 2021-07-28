// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";


const firebaseConfig = {
    apiKey: "AIzaSyBifux_UMgrOPYS612tD5sVvtc2QLWDGdo",
    authDomain: "sathwik-tinder-clone-bb501.firebaseapp.com",
    projectId: "sathwik-tinder-clone-bb501",
    storageBucket: "sathwik-tinder-clone-bb501.appspot.com",
    messagingSenderId: "557202166483",
    appId: "1:557202166483:web:9df464d8b915572499ba26",
    measurementId: "G-0RLV2JGJ4G"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const database = firebaseApp.firestore();

  export default database;