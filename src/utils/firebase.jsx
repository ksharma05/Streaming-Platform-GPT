// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDPDXq5P_ECUMeWhicPq5WFtIIBygvCzxo",
  authDomain: "netflixgpt-c728a.firebaseapp.com",
  projectId: "netflixgpt-c728a",
  storageBucket: "netflixgpt-c728a.firebasestorage.app",
  messagingSenderId: "442204369512",
  appId: "1:442204369512:web:3a74b4901322bb889f81dd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();