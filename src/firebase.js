import firebase from "firebase/app"
import "firebase/auth"
import "firebase/firestore"
import "firebase/storage"

const app = firebase.initializeApp({
  apiKey: "AIzaSyDNaX6qmyZQ1UV93bJt7G-a6b41Rz28eYQ",
  authDomain: "dz-drive.firebaseapp.com",
  projectId: "dz-drive",
  storageBucket: "dz-drive.appspot.com",
  messagingSenderId: "233167339950",
  appId: "1:233167339950:web:791cebb9f94db220a3c83f",
  measurementId: "G-RV28EFWFBX"
})

const firestore = app.firestore()
export const database = {
  folders: firestore.collection("folders"),
  files: firestore.collection("files"),
  formatDoc: doc => {
    return { id: doc.id, ...doc.data() }
  },
  getCurrentTimestamp: firebase.firestore.FieldValue.serverTimestamp,
}
export const storage = app.storage()
export const auth = app.auth()
export default app