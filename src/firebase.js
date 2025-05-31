import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB3UF4xtXJhiOEdhcEuMriBZcg8lSNrLKA",
  authDomain: "blog-react-and-firebase-37f7c.firebaseapp.com",
  projectId: "blog-react-and-firebase-37f7c",
  storageBucket: "blog-react-and-firebase-37f7c.firebasestorage.app",
  messagingSenderId: "1095473270880",
  appId: "1:1095473270880:web:e223c5040dcf424d4a3305"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export { auth, provider, db };