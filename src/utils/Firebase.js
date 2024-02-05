// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCwZ0CfdMsE3NX6JarFb_8b9UwsnxPxgvA",
  authDomain: "netflixgpt-67242.firebaseapp.com",
  projectId: "netflixgpt-67242",
  storageBucket: "netflixgpt-67242.appspot.com",
  messagingSenderId: "999427002538",
  appId: "1:999427002538:web:7abb6f68308d86471f40d3",
  measurementId: "G-6LKJ1K8HLY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();