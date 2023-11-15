import {initializeApp} from 'firebase/app'
import {getFirestore} from 'firebase/firestore'
import {getAuth} from "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyB3W26NBKK1QQ7kbEB0WiyLEOuDG5SU6b0",
    authDomain: "f9-read-list.firebaseapp.com",
    projectId: "f9-read-list",
    storageBucket: "f9-read-list.appspot.com",
    messagingSenderId: "103688550887",
    appId: "1:103688550887:web:9630487bc25b2d578ba542"
};

// init firebase
const app = initializeApp(firebaseConfig)

// init services
const db = getFirestore()
const auth = getAuth()

export { db, auth }