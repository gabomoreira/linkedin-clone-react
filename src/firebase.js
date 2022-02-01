import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCSJ2CH_hZC4C0wRbxZDd3HqGM50WHHnKE",
  authDomain: "linkedin-clone-6a323.firebaseapp.com",
  projectId: "linkedin-clone-6a323",
  storageBucket: "linkedin-clone-6a323.appspot.com",
  messagingSenderId: "902941075676",
  appId: "1:902941075676:web:ccced21ce533956a1eec19",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };
