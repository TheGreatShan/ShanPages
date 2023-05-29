import {initializeApp} from "firebase/app";
import {getFirestore} from "firebase/firestore";
import firebase from "firebase/compat";


const firebaseConfig = {
    apiKey: import.meta.env.VITE_API_KEY,
    authDomain: import.meta.env.VITE_AUTH_DOMAIN,
    databaseURL: import.meta.env.VITE_DBURL,
    projectId: import.meta.env.VITE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_MESSAGING_ID,
    appId: import.meta.env.VITE_APP_ID
};

const firebeasApp = initializeApp(firebaseConfig);
const db = firebase.firestore()

export default db