import { createContext, useContext, useEffect, useState } from "react"

import { initializeApp } from "firebase/app";
import {getAuth, signInWithRedirect, GoogleAuthProvider, onAuthStateChanged, signOut} from "firebase/auth";

const AuthContext = createContext();

export function useAuth() {
    return useContext(AuthContext);
}
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAD4bT37wF4UAgv9Ab1SrHPa6EVB7kKnNw",
  authDomain: "mkrishna-ec1b9.firebaseapp.com",
  projectId: "mkrishna-ec1b9",
  storageBucket: "mkrishna-ec1b9.appspot.com",
  messagingSenderId: "649963835687",
  appId: "1:649963835687:web:36b8ce4a6dc384f8a89902",
  measurementId: "G-1VQCRZCGH7"
};

export default function AuthProvider({children}) {
    const [currentUser, setCurrentUser] = useState([null]);

    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);

    function signInTheUser() {
        signInWithRedirect(auth, new GoogleAuthProvider())
    }

    function signOutTheUser() {
        console.log('Signing out the user')
        signOut(auth);
    }
 
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, user => {
                if (user != null) {
                    console.log("User is set.", user.displayName)
                } else {
                    console.log("User is unset.")
                }
                setCurrentUser(user);

            })   
            return unsubscribe
    },  []);

    const values = {
        currentUser,
        signOutTheUser,
        signInTheUser
    }

    return (
        <AuthContext.Provider value={values}>
            {children}
        </AuthContext.Provider>
    )
}