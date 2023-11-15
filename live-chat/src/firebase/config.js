import firebase from "firebase";
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyCbWExFoQfDrj8UNTvhhKpZ2q61D2p63jg",
    authDomain: "fir-site-18005.firebaseapp.com",
    projectId: "fir-site-18005",
    storageBucket: "fir-site-18005.appspot.com",
    messagingSenderId: "404366863722",
    appId: "1:404366863722:web:b8e77d0a42d9a22ab9c913"
};

// init firebase

firebase.initializeApp(firebaseConfig)

const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()
const timeStamp = firebase.firestore.FieldValue.serverTimestamp

export { projectFirestore, projectAuth, timeStamp }