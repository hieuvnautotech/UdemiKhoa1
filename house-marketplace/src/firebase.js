// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getDatabase } from "firebase/database";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REDIRECT_API_KEY,
  authDomain: "udemy-46abf.firebaseapp.com",
  projectId: "udemy-46abf",
  storageBucket: "udemy-46abf.appspot.com",
  messagingSenderId: "792059080141",
  appId: "1:792059080141:web:dcefa042c52358ddbda884",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Realtime Database and get a reference to the service
export const database = getDatabase(app);
