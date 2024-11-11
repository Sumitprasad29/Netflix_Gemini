// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDgszcQeodHY_9KOfFSwHEKqjpfsZAzUCs",
  authDomain: "netflixgpt-c4984.firebaseapp.com",
  projectId: "netflixgpt-c4984",
  storageBucket: "netflixgpt-c4984.appspot.com",
  messagingSenderId: "449353726326",
  appId: "1:449353726326:web:392eeffe907e892ce5e257",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
