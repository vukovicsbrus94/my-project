// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:import.meta.env.VITE_FIREBASE_API_KEY, 
  authDomain: "booking-3c053.firebaseapp.com",
  projectId: "booking-3c053",
  storageBucket: "booking-3c053.appspot.com",
  messagingSenderId: "536989775479",
  appId: "1:536989775479:web:3bae06b353784287b93872"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

