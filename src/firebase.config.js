
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import { getFirestore } from "firebase/firestore";

const firebaseConfig = JSON.parse(import.meta.env.VITE_FIREBASECONFIG);
  
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  export const db = getFirestore(app);
  export const auth = getAuth(app)
  export default app
  

  
  // export const firebaseConfig = {
  
  //   apiKey: "AIzaSyA_QNyCRENp5l9nUwHvp9HkP77H0dknE9g",
  
  //   authDomain: "meal-planner-fe-database.firebaseapp.com",
  
  //   projectId: "meal-planner-fe-database",
  
  //   storageBucket: "meal-planner-fe-database.appspot.com",
  
  //   messagingSenderId: "372847420168",
  
  //   appId: "1:372847420168:web:bf896c8df182875b3142bd",
  
  //   measurementId: "G-G2D5W6SEQ5"
  
  // };
  
  
  
