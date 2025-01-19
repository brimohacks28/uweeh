import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyAy04TZbX8pqzEZR2OPOsfuHmEaZLok884",
    authDomain: "blog-site-3c644.firebaseapp.com",
    projectId: "blog-site-3c644",
    storageBucket: "blog-site-3c644.firebasestorage.app",
    messagingSenderId: "377262875012",
    appId: "1:377262875012:web:864cb8065972d270ab7dd1"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Exporting Firebase services
export const auth = getAuth(app);
export const db = getFirestore(app);
const storage = getStorage(app);

export { storage }; 