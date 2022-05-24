// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDZ3lZiOBBqLVlptbBAz7fBxRjKfuHwTv8",
  authDomain: "blockdojo-soundoshi.firebaseapp.com",
  projectId: "blockdojo-soundoshi",
  storageBucket: "blockdojo-soundoshi.appspot.com",
  messagingSenderId: "168447870329",
  appId: "1:168447870329:web:c4bfc3508819cd42a15ba8",
  measurementId: "G-HYZW5FXQL8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default getFirestore();