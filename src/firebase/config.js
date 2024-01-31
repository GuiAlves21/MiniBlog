// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB-1rC6jX0KzAIKjImUxemtCii5v6fMO9o",
  authDomain: "miniblog-59841.firebaseapp.com",
  projectId: "miniblog-59841",
  storageBucket: "miniblog-59841.appspot.com",
  messagingSenderId: "481705312247",
  appId: "1:481705312247:web:3ac74b15b6220b74bab8f2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export {db};