import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBdjxVAHgJ6k_VL8rfd6GIeD4bUQXkbXhQ",
    authDomain: "miniblog2-5aa1b.firebaseapp.com",
    projectId: "miniblog2-5aa1b",
    storageBucket: "miniblog2-5aa1b.appspot.com",
    messagingSenderId: "939452880384",
    appId: "1:939452880384:web:91a4eee2af962486a16ae5"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { app, db };