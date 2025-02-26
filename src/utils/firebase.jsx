// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "Your API Key",
  authDomain: "Your auth domain",
  projectId: "Your Project Id",
  storageBucket: "Your Storage Bucket",
  messagingSenderId: "Your Messenger Sender Id",
  appId: "Your Firebase appId",
  measurementId: "Your Measurement Id"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();