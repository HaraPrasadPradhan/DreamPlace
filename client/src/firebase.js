// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "dream-place-c2aa3.firebaseapp.com",
  projectId: "dream-place-c2aa3",
  storageBucket: "dream-place-c2aa3.appspot.com",
  messagingSenderId: "792438707401",
  appId: "1:792438707401:web:24fa72f0a26455892da918"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);