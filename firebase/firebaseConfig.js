// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCkNC9ldtmUarQy4mauCANvX_rkKUIsKjk",
  authDomain: "bc-bites.firebaseapp.com",
  projectId: "bc-bites",
  storageBucket: "bc-bites.appspot.com",
  messagingSenderId: "407510691112",
  appId: "1:407510691112:web:8af391dc11fc3366c7b41d",
  measurementId: "G-20N77HLN5B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);