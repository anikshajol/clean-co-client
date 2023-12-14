// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCfBTq_c8CWQ_Qd9Unqu6ta2PoBLz6kr54",
  authDomain: "simple-firebase-eba9b.firebaseapp.com",
  projectId: "simple-firebase-eba9b",
  storageBucket: "simple-firebase-eba9b.appspot.com",
  messagingSenderId: "960828012556",
  appId: "1:960828012556:web:866c1cecd7f8d21b325629",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
