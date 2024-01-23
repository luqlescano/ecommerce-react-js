import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyA2wRz0IA-DWXMfsvmBe6WAPwb0-x1Fv4w",
  authDomain: "imprenta-dubie.firebaseapp.com",
  projectId: "imprenta-dubie",
  storageBucket: "imprenta-dubie.appspot.com",
  messagingSenderId: "292996334155",
  appId: "1:292996334155:web:7b3f2f223f289641c843ce"
};

initializeApp(firebaseConfig)

const db = getFirestore()

export default db