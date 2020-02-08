import * as firebase from 'firebase';

// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyBmMKQH5lbziClzA6FpGhL-pHZQRn53Zyo",
    authDomain: "animelist-a4ee1.firebaseapp.com",
    databaseURL: "https://animelist-a4ee1.firebaseio.com",
    projectId: "animelist-a4ee1",
    storageBucket: "animelist-a4ee1.appspot.com",
    messagingSenderId: "868752723753",
    appId: "1:868752723753:web:1f66fd4ff9cfaf3d183138",


    };
    const firebaseApp = firebase.initializeApp(firebaseConfig);

    export const firebaseAuth = firebaseApp.auth();