import firebase from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDXfhrln8DCc0vq-iHRKUAOsU2llqUFQI8",
  authDomain: "tenedores-7ab66.firebaseapp.com",
  databaseURL: "https://tenedores-7ab66.firebaseio.com",
  projectId: "tenedores-7ab66",
  storageBucket: "tenedores-7ab66.appspot.com",
  messagingSenderId: "552487378206",
  appId: "1:552487378206:web:28ec81bea6256972a3bd0f"
};

export const firebaseApp = firebase.initializeApp(firebaseConfig);
