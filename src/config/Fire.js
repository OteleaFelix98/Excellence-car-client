import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyDeMvD2PJ3DEUjAvvAawaYBhyq3jSP39kE",
    authDomain: "react-register-21c79.firebaseapp.com",
    databaseURL: "https://react-register-21c79.firebaseio.com",
    projectId: "react-register-21c79",
    storageBucket: "react-register-21c79.appspot.com",
    messagingSenderId: "362876171339",
    appId: "1:362876171339:web:0a259270f3ad40b5cc09ce",
    measurementId: "G-PK9TNVT08Y"
};

const fire = firebase.initializeApp(config);
export default fire;