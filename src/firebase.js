import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyArbElOa0QKNONglYFF-dp1up9sGEp1E7I",
  authDomain: "slack-clone-9724b.firebaseapp.com",
  projectId: "slack-clone-9724b",
  storageBucket: "slack-clone-9724b.appspot.com",
  messagingSenderId: "325081032543",
  appId: "1:325081032543:web:3d2d206d6bc3c629e0b8ea",
  measurementId: "G-ZQ4H4SEZD7"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
