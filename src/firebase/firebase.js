import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyCG8Ns2_bEjDC-7v0olHjH1pYM1NzInblc",
  authDomain: "slack-clone-a53b9.firebaseapp.com",
  projectId: "slack-clone-a53b9",
  storageBucket: "slack-clone-a53b9.appspot.com",
  messagingSenderId: "419214303877",
  appId: "1:419214303877:web:04efa80537adb9c5af3fec",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider, db };
