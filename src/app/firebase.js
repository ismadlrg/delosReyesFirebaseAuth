import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js"
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js"

const firebaseConfig = {
  apiKey: "AIzaSyDgjEuOYPBKCD-RrzxxvYtPG91QZE96ACo",
  authDomain: "fir-login-d4931.firebaseapp.com",
  projectId: "fir-login-d4931",
  storageBucket: "fir-login-d4931.appspot.com",
  messagingSenderId: "739610441166",
  appId: "1:739610441166:web:a8e56947972238b224e79f"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)