import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from 'firebase/auth'
import { getAnalytics } from "firebase/analytics";
const firebaseConfig = {
  apiKey: "AIzaSyARM2mKeVpuvAxHTMevbuY8sBkU3T6JANI",
  authDomain: "expense-tracker-app1.firebaseapp.com",
  projectId: "expense-tracker-app1",
  storageBucket: "expense-tracker-app1.appspot.com",
  messagingSenderId: "295340009130",
  appId: "1:295340009130:web:1b25ab74b0913b50e292d3",
  measurementId: "G-SXGXRK8BP1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app)
export const provider = new GoogleAuthProvider()