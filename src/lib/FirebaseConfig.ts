import firebase from "firebase/app";
import fireDB from "firebase/compat";


const firebaseConfig = {
    apiKey: import.meta.env.VITE_API_KEY,
    authDomain: import.meta.env.VITE_AUTH_DOMAIN,
    databaseURL: import.meta.env.VITE_DBURL,
    projectId: import.meta.env.VITE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_MESSAGING_ID,
    appId: import.meta.env.VITE_APP_ID
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = fireDB.firestore()

export default db