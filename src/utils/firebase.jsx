// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCyvO9eyq_9cuoDZUpZtl7nDkR7XEaq_1w",
  authDomain: "netflixgpt-v2-7c8f8.firebaseapp.com",
  projectId: "netflixgpt-v2-7c8f8",
  storageBucket: "netflixgpt-v2-7c8f8.firebasestorage.app",
  messagingSenderId: "1001900092660",
  appId: "1:1001900092660:web:e3e03a00cb00b37e6d42a1",
  measurementId: "G-2M26D7VQVG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);