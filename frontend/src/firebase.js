// import { initializeApp } from "firebase/app";

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCKfv1JrxMT8UdDZ0xMOAZ2z9kUmuJxdEQ",
  authDomain: "tspf-29098.firebaseapp.com",
  databaseURL: "https://tspf-29098-default-rtdb.firebaseio.com",
  projectId: "tspf-29098",
  storageBucket: "tspf-29098.appspot.com",
  messagingSenderId: "797254104224",
  appId: "1:797254104224:web:bd8dd11496d0667dc145c5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
