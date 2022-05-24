// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyACvBBwq0YIe8bYeonqryY3nriHbZmYNbw',
  authDomain: 'general-assembly-final-p-27694.firebaseapp.com',
  projectId: 'general-assembly-final-p-27694',
  storageBucket: 'general-assembly-final-p-27694.appspot.com',
  messagingSenderId: '182313491228',
  appId: '1:182313491228:web:1899908dc24d13fb9e78d9',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);