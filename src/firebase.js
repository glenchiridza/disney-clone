import firebase from 'firebase/compat/app';
import "firebase/compat/auth"
import "firebase/compat/firestore"
import "firebase/compat/storage"

const firebaseConfig = {

  apiKey: "AIzaSyAPMi_Svrs7p7s6ljnpUrHTnsls0KDqoMc",

  authDomain: "authentication-8a6c9.firebaseapp.com",

  databaseURL: "https://authentication-8a6c9.firebaseio.com",

  projectId: "authentication-8a6c9",

  storageBucket: "authentication-8a6c9.appspot.com",

  messagingSenderId: "841514813666",

  appId: "1:841514813666:web:a7c8347de1bc7dfed2b6bb"

};



const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
