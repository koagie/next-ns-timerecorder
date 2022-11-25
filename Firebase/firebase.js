// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC7WnqIysASykI3WwoaXGZtjsLQmqiIHwA",
  authDomain: "ns-time-recorder.firebaseapp.com",
  databaseURL: "https://ns-time-recorder-default-rtdb.firebaseio.com",
  projectId: "ns-time-recorder",
  storageBucket: "ns-time-recorder.appspot.com",
  messagingSenderId: "793561484218",
  appId: "1:793561484218:web:c393355a4a5fd3790aab83"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);