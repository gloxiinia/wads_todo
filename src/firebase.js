// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut
} from "firebase/auth";
  import {
  getFirestore,
  query,
  getDocs,
  collection,
  where,
  addDoc,
  } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD7gBDOx2Pl98ROzGQrTiDmNtzCIWY59fg",
  authDomain: "todo-app-b17e2.firebaseapp.com",
  projectId: "todo-app-b17e2",
  storageBucket: "todo-app-b17e2.appspot.com",
  messagingSenderId: "952292227319",
  appId: "1:952292227319:web:e395ad15628da7cea47bf2",
  measurementId: "G-XVDMTCZVJ2"
};

//Authentication functions
//Setting up the google authentication provider
const googleProvider = new GoogleAuthProvider();
const signInWithGoogle = async () => {
  try {
    const res = await signInWithPopup(auth, googleProvider);
    const user = res.user;
    const q = query(collection(db, "users"), where ("uid", "==", user.uid));
    const docs = await getDocs(q);
    if (docs.docs.length === 0) {
      await addDoc(collection(db, "users"), {
        uid : user.uid,
        name: user.displayName,
        authProvider: "google",
        email: user.email,
      });
    }

  } catch (err){
    console.error(err);
    alert(err.message);
  }
};

//Signing in using email and passwd
const logInWithEmailAndPassword = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (err){
    console.error(err);
    alert(err.message);
  }
}

//Registering a user with email and passwd
const registerWithEmailAndPassword = async (name, email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    addDoc(collection(db, "users"), {
      uid: user.uid,
      name,
      authProvider: "local",
      email,
    })
  } catch (err){
    console.error(err);
    alert(err.message);
  }
};

//Sending passwd reset link
const sendPasswordReset = async (email) => {
  try {
    await sendPasswordResetEmail(auth, email);
    alert("Password reset link has been sent!");

  }catch(err){
    console.error.apply(err);
    alert(err.message);
  }
};

//Logout 
const logout = () => {
  signOut(auth);
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export {
  auth,
  db,
  signInWithGoogle,
  logInWithEmailAndPassword,
  registerWithEmailAndPassword,
  sendPasswordReset,
  logout,
};


