// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { Analytics, getAnalytics } from "firebase/analytics";
import { Auth, getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

interface firebaseConfigType{
  apiKey: string;
  authDomain: string;
  projectId: string;
  storageBucket: string;
  messagingSenderId: string;
  appId: string;
  measurementId: string;
}
const firebaseConfig:firebaseConfigType = {
  apiKey: "AIzaSyDHtI0qpw6ii4jWFqhD0uxdwhzebhaTjRs",
  authDomain: "netflix-gpt-a8952.firebaseapp.com",
  projectId: "netflix-gpt-a8952",
  storageBucket: "netflix-gpt-a8952.firebasestorage.app",
  messagingSenderId: "1095968614759",
  appId: "1:1095968614759:web:cbd5f0b245e54c0b8d27c2",
  measurementId: "G-ZBRW81F43R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics:Analytics = getAnalytics(app);

export const auth:Auth = getAuth()
