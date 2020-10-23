// import firebase from "firebase/app";
// import "firebase/firestore";
import * as firebase from "firebase"

var firebaseConfig = {
  apiKey: "AIzaSyC8JAk9pBGh9FxlH9CY0AI34nt5d09giU0",
  authDomain: "project-60827.firebaseapp.com",
  databaseURL: "https://project-60827.firebaseio.com",
  projectId: "project-60827",
  storageBucket: "project-60827.appspot.com",
  messagingSenderId: "333101427113",
  appId: "1:333101427113:web:9e6ed912579e203be3bcb8",
  measurementId: "G-RVYGVV89P8",
};

// Initialize Firebase
export const firebaseApp = firebase.initializeApp(firebaseConfig);

export const firestore = firebaseApp.firestore();
