import firebase from 'firebase'

var firebaseConfig = {
    apiKey: "AIzaSyCxGJyBZjT1EsXlq_Dwuo2PmoBPEIBIfVs",
    authDomain: "calcoi.firebaseapp.com",
    databaseURL: "https://calcoi.firebaseio.com",
    projectId: "calcoi",
    storageBucket: "calcoi.appspot.com",
    messagingSenderId: "894100526827",
    appId: "1:894100526827:web:3d4871f93b93d6ecfcd0ae",
    measurementId: "G-DGWV3HF1GL"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  export const database = firebase.firestore();
  export const auth = firebase.auth();
//   export const current_user = auth.currentUser()
  export const users = database.collection('users');