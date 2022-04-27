// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC6AD6ldMZFDHdah6ar5zX4B60vobMcIrQ",
  authDomain: "blog-website-99902.firebaseapp.com",
  projectId: "blog-website-99902",
  storageBucket: "blog-website-99902.appspot.com",
  messagingSenderId: "1048720149386",
  appId: "1:1048720149386:web:1447f6bad4a2f1b4be1673"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();