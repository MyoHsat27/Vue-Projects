import firebase from "firebase/app";
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCbWExFoQfDrj8UNTvhhKpZ2q61D2p63jg",
    authDomain: "fir-site-18005.firebaseapp.com",
    projectId: "fir-site-18005",
    storageBucket: "fir-site-18005.appspot.com",
    messagingSenderId: "404366863722",
    appId: "1:404366863722:web:aa6a16721ce29468b9c913"
};

// init firebase
firebase.initializeApp(firebaseConfig)

// init firestore service
const projectFirestore = firebase.firestore()
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { projectFirestore, timestamp }
