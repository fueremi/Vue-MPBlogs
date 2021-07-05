// Your web app's Firebase configuration
import firebase from "firebase/app";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyB9v50D4MAbp_9C6xOwbe3d2dKqIDbA_hA",
  authDomain: "mpblogs-8c359.firebaseapp.com",
  projectId: "mpblogs-8c359",
  storageBucket: "mpblogs-8c359.appspot.com",
  messagingSenderId: "333705915188",
  appId: "1:333705915188:web:f15cabd0ff866b89ead361",
};

// Initialize Firebase

const firebaseApp = firebase.initializeApp(firebaseConfig);
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export {timestamp}
export default firebaseApp.firestore();