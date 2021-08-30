import firebase from 'firebase/app'
import 'firebase/storage';
import 'firebase/firestore';
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
firebase.initializeApp(firebaseConfig);

const projectstorage = firebase.storage();
const projectfirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;
export { projectstorage, projectfirestore, timestamp }
