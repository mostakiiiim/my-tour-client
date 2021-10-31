import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";

import { useState, useEffect } from 'react';
import initializeAuthentication from "../Pages/Home/Login/Firebase/firebase.init";


initializeAuthentication();


const useFirebase = () => {
    const [user, setUser] = useState({});
    // eslint-disable-next-line no-unused-vars
    const [email, setEmail] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const auth = getAuth();

    // Google Sign In

    const signInUsingGoogle = () => {
        setIsLoading(true);
        const googleProvider = new GoogleAuthProvider();
        return signInWithPopup(auth, googleProvider);




    }
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
            }
            else {
                setUser({})
            }
            setIsLoading(false);
        });
        return () => unsubscribed;
    },
        // eslint-disable-next-line 
        [])

    //User Logout
    const logOut = () => {
        setIsLoading(true);
        signOut(auth)
            .then(() => { })
            .finally(() => setIsLoading(false));
    }


    return {
        user,
        email,
        isLoading,
        setIsLoading,
        signInUsingGoogle,
        logOut
    }
}

export default useFirebase;