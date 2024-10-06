import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDJhmRyQhKsD_NLXmdEgD9b3MuXT1fYZVA",
  authDomain: "cultech-439cf.firebaseapp.com",
  projectId: "cultech-439cf",
  storageBucket: "cultech-439cf.appspot.com",
  messagingSenderId: "146030339596",
  appId: "1:146030339596:web:51c8ac134e9265d71b3029",
  //measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
