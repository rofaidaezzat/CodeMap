import { initializeApp } from "firebase/app";

import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {

    apiKey: "AIzaSyChhdM884CIJjchyNdhrGBD3RevK9Mybis",

    authDomain: "roadmap-4604b.firebaseapp.com",

    projectId: "roadmap-4604b",

    storageBucket: "roadmap-4604b.firebasestorage.app",

    messagingSenderId: "626341098636",

    appId: "1:626341098636:web:27054d70d0f50abcdfb7a9",

    measurementId: "G-TGK738L0W4"

};


  // Initialize Firebase

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();