// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyCl6nxxLv7w37Ddo_3bqCXzJqWiBDVDKQ0",
  authDomain: "netflixgpt-v22.firebaseapp.com",
  projectId: "netflixgpt-v22",
  storageBucket: "netflixgpt-v22.firebasestorage.app",
  messagingSenderId: "799393922380",
  appId: "1:799393922380:web:4fd5f737981847d86363e9",
  measurementId: "G-2NTFSY0TQY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();