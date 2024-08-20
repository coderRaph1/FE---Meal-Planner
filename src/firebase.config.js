// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
// import "firebase/firestore";

import { getFirestore } from "firebase/firestore";
import { doc, setDoc } from "firebase/firestore"; 


// firebase.initializeApp(firebaseConfig);



// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

export const firebaseConfig = {

  apiKey: "AIzaSyA_QNyCRENp5l9nUwHvp9HkP77H0dknE9g",

  authDomain: "meal-planner-fe-database.firebaseapp.com",

  projectId: "meal-planner-fe-database",

  storageBucket: "meal-planner-fe-database.appspot.com",

  messagingSenderId: "372847420168",

  appId: "1:372847420168:web:bf896c8df182875b3142bd",

  measurementId: "G-G2D5W6SEQ5"

};


// Initialize Firebase

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);




