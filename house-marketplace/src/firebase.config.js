// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDKKNHTJZivhMPomv4rvgkI3o9M6YfEsbc",
  authDomain: "house-marketplace-app-626b3.firebaseapp.com",
  projectId: "house-marketplace-app-626b3",
  storageBucket: "house-marketplace-app-626b3.appspot.com",
  messagingSenderId: "745304279334",
  appId: "1:745304279334:web:66f90e36d0bb2f3e2059e7",
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();

