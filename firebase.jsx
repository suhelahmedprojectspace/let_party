import firebase from "firebase";

// Your web app's Firebase configuration
const firebaseConfig = {


  apiKey: "AIzaSyDfNiNPdbUQUsXVlHM3zluZiAJ3UfEyDcQ",

  authDomain: "let-s-party-38c4f.firebaseapp.com",

  projectId: "let-s-party-38c4f",

  storageBucket: "let-s-party-38c4f.appspot.com",

  messagingSenderId: "215965260402",

  appId: "1:215965260402:web:0579ca5bda06662d7d40eb"

};
// Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);

export default fire
