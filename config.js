import * as firebase from 'firebase';

// credenciais do firebase
const firebaseConfig = {
    apiKey: 
    authDomain:
    databaseURL:
    projectId: 
    storageBucket: 
    messagingSenderId: 
    appId: 


    };
    const firebaseApp = firebase.initializeApp(firebaseConfig);

    export const firebaseAuth = firebaseApp.auth();
