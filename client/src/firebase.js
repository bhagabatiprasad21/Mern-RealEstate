// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-70b65.firebaseapp.com",
  projectId: "mern-estate-70b65",
  storageBucket: "mern-estate-70b65.appspot.com",
  messagingSenderId: "267606976109",
  appId: "1:267606976109:web:3b01e5d86e76552fd54164"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);