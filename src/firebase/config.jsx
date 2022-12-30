import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAfWBBKkKaN12yJ0Ss-XAGRnq1OOMc1WnA",
  authDomain: "thetrellosite.firebaseapp.com",
  projectId: "thetrellosite",
  storageBucket: "thetrellosite.appspot.com",
  messagingSenderId: "308061728925",
  appId: "1:308061728925:web:51d1764bc0b4d884172474",
};

initializeApp(firebaseConfig);

const auth = getAuth()
const db = getFirestore()

export {auth, db}