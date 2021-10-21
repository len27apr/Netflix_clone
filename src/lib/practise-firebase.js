// import {initializeApp} from 'firebase/app';
const Firebase = require('firebase/app');
require ('firebase/firestore');
// require('firebase/compat/auth');
// import { seedDatabase } from '../seed';

//we need a config here
const config={
    apiKey: "AIzaSyBtGjCCyvEhrFUYym-jSIV-IFXjFz8mymI",
    authDomain: "neflix-clone-e882f.firebaseapp.com",
    projectId: "neflix-clone-e882f",
    storageBucket: "neflix-clone-e882f.appspot.com",
    messagingSenderId: "111900628324",
    appId: "1:111900628324:web:7676d4bff5ecec5f8dd671"
};
const firebase=Firebase.initializeApp(config);
console.log('the firebase firestore object is: ',firebase.firestore.collection('series'));
// seedDatabase(firebase);
// console.log("The mainn firebase is: ", firebase);
module.exports= {firebase};