//https://www.youtube.com/watch?v=9NOg_HSbo9w

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBHH_wJX030Vp91U2vGBxD80tjxOBdxrzk",
  authDomain: "m-invoice.firebaseapp.com",
  projectId: "m-invoice",
  storageBucket: "m-invoice.appspot.com",
  messagingSenderId: "855468170564",
  appId: "1:855468170564:web:41f846edf4ee4fdb148b11",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export default db;

export { auth, provider };
