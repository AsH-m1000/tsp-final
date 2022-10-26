// import { initializeApp } from "firebase/app";

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDlWYRbiLGZx0JWbtG6MTo5d7o0XqRF8yk",
  authDomain: "project-s-e7e24.firebaseapp.com",
  databaseURL: "https://project-s-e7e24-default-rtdb.firebaseio.com",
  projectId: "project-s-e7e24",
  storageBucket: "project-s-e7e24.appspot.com",
  messagingSenderId: "1003768574770",
  appId: "1:1003768574770:web:bf32e096a58aacec869d2b",
  measurementId: "G-STGQVX943Q",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
