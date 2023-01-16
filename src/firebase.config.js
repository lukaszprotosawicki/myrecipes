// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDMH7AgoovFkAEEGEV7JPh-TotJuFN1OTE",
  authDomain: "react-recipe-learn.firebaseapp.com",
  projectId: "react-recipe-learn",
  storageBucket: "react-recipe-learn.appspot.com",
  messagingSenderId: "225620986949",
  appId: "1:225620986949:web:5a946b0237fc793006a72c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };
