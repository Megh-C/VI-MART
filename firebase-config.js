import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyB1tDAzoAh2_X_lAdIGY0X3PnUFsQqwXDA",
  authDomain: "statictable-da3e9.firebaseapp.com",
  projectId: "statictable-da3e9",
  storageBucket: "statictable-da3e9.appspot.com",  // ✅ Corrected here
  messagingSenderId: "1055856790523",
  appId: "1:1055856790523:web:7889743511f71f4651595e",
  measurementId: "G-S3LT36ZX3J"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
