// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyDU4avjCpXxHXIP-EXqyyJBlUINUG6sFBU",
  authDomain: "signin-51aec.firebaseapp.com",
  projectId: "signin-51aec",
  storageBucket: "signin-51aec.appspot.com",
  messagingSenderId: "580052921705",
  appId: "1:580052921705:web:0f98a88492836e0a66a1f8",
  measurementId: "G-SZP97RN4S2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);