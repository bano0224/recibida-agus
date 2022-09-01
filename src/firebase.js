// Import the functions you need from the SDKs you need
import '@firebase/storage';
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAp4ntpAvC2EUrAJTDCbFYUzwTrI60lZGM",
  authDomain: "recibida-agus.firebaseapp.com",
  projectId: "recibida-agus",
  storageBucket: "recibida-agus.appspot.com",
  messagingSenderId: "101962290693",
  appId: "1:101962290693:web:2df289738ead14bf4dee6c"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const storage = getStorage()

export const defaultStorage = getStorage(app)