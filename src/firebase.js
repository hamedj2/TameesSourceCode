import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useEffect, useState } from "react";
import { getFirestore } from "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCI59XdHwxpFIwglrZm0cD6kikQJbMklzU",
  authDomain: "tamees-2f907.firebaseapp.com",
  databaseURL: "https://tamees-2f907-default-rtdb.firebaseio.com",
  projectId: "tamees-2f907",
  storageBucket: "tamees-2f907.appspot.com",
  messagingSenderId: "362358957450",
  appId: "1:362358957450:web:6c06617e900fa5a3729473",
  measurementId: "G-PJKYHC33YL",
};

//Initilize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

export default getFirestore();

export function signup(email, password) {
  return createUserWithEmailAndPassword(auth, email, password);
}
export function logout() {
  return signOut(auth);
}
export function login(email, password) {
  return signInWithEmailAndPassword(auth, email, password);
}

//custom hook
export function useAuth() {
  const [currentUser, setCurrentUser] = useState();
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => setCurrentUser(user));
    return unsub;
  }, []);
  return currentUser;
}
