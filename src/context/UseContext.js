import React from 'react';
import { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import app from '../Firebase/Firebase.config';
import { useState } from 'react';
import { useEffect } from 'react';


export const AuthContext = createContext();
const auth = getAuth(app)


const UseContext = ({ children }) => {
    const [users, setUsers] = useState({});
    const [loding, setLoding] = useState(true)
    const provider = new GoogleAuthProvider();
    const provider2 = new GithubAuthProvider();

    const CreateRegister = (email, password) => {
        setLoding(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const login = (email, password) => {
        setLoding(true);
        return signInWithEmailAndPassword(auth, email, password);
    };

    const ResetPassword = (email) => {

        return sendPasswordResetEmail(auth, email)
    };

    const signinGoogle = () => {
        setLoding(true);

        return signInWithPopup(auth, provider);
    };

    const signinGithub = () => {
        setLoding(true);

        return signInWithPopup(auth, provider2);
    };
    const logout = () => {
        setLoding(true);
        return signOut(auth);
    }



    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, cureentUser => {
            setUsers(cureentUser);
            setLoding(false);

        })
        return () => {
            unsubscribe();
        }
    }, [])

    const authValue = { CreateRegister, login, ResetPassword, signinGoogle, signinGithub, users, loding,logout }
    return (
        <div>
            <AuthContext.Provider value={authValue}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default UseContext;