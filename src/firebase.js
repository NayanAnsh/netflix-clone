
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getAuth , GoogleAuthProvider} from 'firebase/auth'
import { getFirestore } from "firebase/firestore"
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA5NsLxdH1C0XvsgEYI9M7zAb2nex6Y00E",
    authDomain: "netflix-c50d3.firebaseapp.com",
    projectId: "netflix-c50d3",
    storageBucket: "netflix-c50d3.appspot.com",
    messagingSenderId: "191654159573",
    appId: "1:191654159573:web:d271dbb1c918699edeee5c",
    measurementId: "G-4J3VS5YXTW"
  };
  const app = initializeApp(firebaseConfig);
  export const auth = getAuth(app);
  export const googleAuthProvider = new GoogleAuthProvider();
  export const db = getFirestore(app);