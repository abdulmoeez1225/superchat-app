// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/storage";
import "firebase/compat/firestore";
import "firebase/compat/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDsKvyMKutj6oZiVbB_qMjn-0Cp8F9sDtA",
  authDomain: "chat-system-24570.firebaseapp.com",
  projectId: "chat-system-24570",
  storageBucket: "chat-system-24570.appspot.com",
  messagingSenderId: "350404219008",
  appId: "1:350404219008:web:ce03cdd0272c1614509665",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const firestore = firebase.firestore();

export { auth, firestore };
