// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAt9abO4eMdYv65UnVbqAIMpjwq16G5ls4",
    authDomain: "xilflix.firebaseapp.com",
    projectId: "xilflix",
    storageBucket: "xilflix.appspot.com",
    messagingSenderId: "116581440330",
    appId: "1:116581440330:web:42f5d16621a6fb1081ffb3",
    measurementId: "G-BLGTSMWGZD"
}

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }