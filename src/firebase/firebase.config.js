/* // Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: import.meta.env.VITE_apiKey ,
  authDomain: import.meta.env.VITE_authDomain ,
  projectId: import.meta.env.VITE_projectId ,
  storageBucket: import.meta.env.VITE_storageBucket ,
  messagingSenderId: import.meta.env.VITE_messagingSenderId ,
  appId: import.meta.env.VITE_appId 
};

// Initialize Firebase
const app = initializeApp(firebaseConfig); */




// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDX1PrrCKpESVBAOesZ-6uInDBmiNmj7oY",
  authDomain: "chafe-team.firebaseapp.com",
  projectId: "chafe-team",
  storageBucket: "chafe-team.appspot.com",
  messagingSenderId: "839982191027",
  appId: "1:839982191027:web:1217ae9f6c5d8f9eb1fbc6",
  measurementId: "G-RS3TLWM6WF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;