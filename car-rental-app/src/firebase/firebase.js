// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAGq4z3ofkwY2IHDf4Mmzi3P03YiMC7M68",
  authDomain: "car-app-d0bc3.firebaseapp.com",
  projectId: "car-app-d0bc3",
  storageBucket: "car-app-d0bc3.firebasestorage.app",
  messagingSenderId: "377364852484",
  appId: "1:377364852484:web:0bddbff329a610fb976a51",
  measurementId: "G-BZTZRXXBMD",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const analytics = getAnalytics(app);
export { app, db };
