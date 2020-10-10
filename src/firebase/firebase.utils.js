import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config ={
    apiKey: "AIzaSyAXS75OTSHA-BAO14M9PdckrkuegXIHL_8",
    authDomain: "crown-db-b18e3.firebaseapp.com",
    databaseURL: "https://crown-db-b18e3.firebaseio.com",
    projectId: "crown-db-b18e3",
    storageBucket: "crown-db-b18e3.appspot.com",
    messagingSenderId: "8189235147",
    appId: "1:8189235147:web:7b00c93b30d9343149b04e"
  };

  firebase.initializeApp(config); 

  export const auth =firebase.auth();
  export const firestore = firebase.firestore();

  const provider =new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt:'select_account'});
  export const signInWithGoogle=()=>auth.signInWithPopup(provider);

  export default firebase;