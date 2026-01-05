// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth, GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "playtube-f5afe.firebaseapp.com",
  projectId: "playtube-f5afe",
  storageBucket: "playtube-f5afe.firebasestorage.app",
  messagingSenderId: "861236160596",
  appId: "1:861236160596:web:74892be6971952751ea5c1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };
