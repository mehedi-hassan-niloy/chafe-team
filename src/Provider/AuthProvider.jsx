import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../firebase/firebase.config';


export const AuthContext = createContext(null);
const auth = getAuth(app)


const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoadin] = useState(true)



    const createUser = async (email, password, name, photo) => {
        try {
            setLoadin(true);
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            await updateProfile(userCredential.user, {
                displayName: name,
                photoURL: photo
            });
            return userCredential;
        }
        catch (error) {
            throw error;
        }
    }


    const signIn = (email, password) => {
        setLoadin(true)
        return signInWithEmailAndPassword(auth, email, password)
    }




    const logOut = () => {
        setLoadin(true)
        return signOut(auth)

    }



    useEffect(() => {
        const unsubdcribe = onAuthStateChanged(auth, logUser => {
            setUser(logUser)
            setLoadin(false)


        }, [])
        return () => {
            unsubdcribe()
        }
    })

    const authInfo = {
        user,
        loading,
        createUser,
        signIn,
        logOut,
        setLoadin


    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;