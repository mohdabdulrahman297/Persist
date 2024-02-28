// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "recipe-app-e00ae.firebaseapp.com",
  projectId: "recipe-app-e00ae",
  storageBucket: "recipe-app-e00ae.appspot.com",
  messagingSenderId: "176418270293",
  appId: "1:176418270293:web:e101acc03bf9c4fb8278dc"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);