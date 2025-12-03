// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyChWpTPIIcqaoF-I9x4Hnt924Nj-2qdiPs",
    authDomain: "selinaappdemo1.firebaseapp.com",
    projectId: "selinaappdemo1",
    storageBucket: "selinaappdemo1.firebasestorage.app",
    messagingSenderId: "188135832260",
    appId: "1:188135832260:web:f770cf5c4772d458efa791",
    measurementId: "G-WRKB9BYMJ3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);