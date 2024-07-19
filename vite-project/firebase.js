// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAN34_dB1YWJ5zk2IQHHbeNmUFkOepmMcM",
  authDomain: "cartwish-61dc7.firebaseapp.com",
  projectId: "cartwish-61dc7",
  storageBucket: "cartwish-61dc7.appspot.com",
  messagingSenderId: "524121141462",
  appId: "1:524121141462:web:bc3e9691f7c44ab11f5977",
  measurementId: "G-D4N72CCFGB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);