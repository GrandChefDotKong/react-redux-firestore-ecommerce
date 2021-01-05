import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyBXtb1N1DS1StQGbjMQOL6E0lDURgtfEAE",
  authDomain: "sushu-shop-react.firebaseapp.com",
  databaseURL: "https://sushu-shop-react.firebaseio.com",
  projectId: "sushu-shop-react",
  storageBucket: "",
  messagingSenderId: "389141864181",
  appId: "1:389141864181:web:49bcb7a28b2e6ed7c4efbc"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
