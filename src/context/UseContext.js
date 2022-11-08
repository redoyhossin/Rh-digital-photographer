import React from 'react';
import { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth, GithubAuthProvider, GoogleAuthProvider, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import app from '../Firebase/Firebase.config';


export const AuthContext = createContext();
const auth = getAuth(app)


const UseContext = ({ children }) => {
    const provider = new GoogleAuthProvider();
    const provider2 = new GithubAuthProvider();

    const CreateRegister = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const login = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    };

    const ResetPassword = (email) => {
        return sendPasswordResetEmail(auth, email)
    };

    const signinGoogle = () => {
        return signInWithPopup(auth, provider);
    };

    const signinGithub = () => {
        return signInWithPopup(auth, provider2);
    }





    const authValue={CreateRegister,login,ResetPassword,signinGoogle,signinGithub}
    return (
        <div>
            <AuthContext.Provider value={authValue}>
            {children} 
            </AuthContext.Provider>
        </div>
    );
};

export default UseContext;