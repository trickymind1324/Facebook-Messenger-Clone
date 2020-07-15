import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCaTpKddSh8ehONNj21ngdpiaiu3cME1Zk",
    authDomain: "facebook-messenger-clone13.firebaseapp.com",
    databaseURL: "https://facebook-messenger-clone13.firebaseio.com",
    projectId: "facebook-messenger-clone13",
    storageBucket: "facebook-messenger-clone13.appspot.com",
    messagingSenderId: "962527281259",
    appId: "1:962527281259:web:931867935ca978db39712e",
    measurementId: "G-PRYJ7MGQEH"
  });

  const db = firebaseApp.firestore();

  export default db;