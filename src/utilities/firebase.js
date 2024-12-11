// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDF1QIiqAMtxWDrDXAP-fVMvsUklDnnQh8",
  authDomain: "netflix-gpt-48572.firebaseapp.com",
  projectId: "netflix-gpt-48572",
  storageBucket: "netflix-gpt-48572.firebasestorage.app",
  messagingSenderId: "101556320366",
  appId: "1:101556320366:web:34ce4f485ebd6fa3e5ce7f",
  measurementId: "G-1MSD1D0MDC",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();