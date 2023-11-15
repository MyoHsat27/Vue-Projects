import firebase from "firebase/app";
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyCyUMsl5HaXE20bFoRPBHE16oqSt5ssrsg",
    authDomain: "sound-cloud-8888d.firebaseapp.com",
    projectId: "sound-cloud-8888d",
    storageBucket: "sound-cloud-8888d.appspot.com",
    messagingSenderId: "103160538541",
    appId: "1:103160538541:web:ebf45e0cd3b881a3036d24"
};

// init firebase
firebase.initializeApp(firebaseConfig)

// init services
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()
const projectStorage = firebase.storage()
const googleAuthProvider = new firebase.auth.GoogleAuthProvider()

// timestamp
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export {projectFirestore, projectAuth, projectStorage, googleAuthProvider, timestamp}