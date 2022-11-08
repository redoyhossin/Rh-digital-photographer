import React from 'react';
import { createContext } from 'react';
import { getAuth } from 'firebase/auth';
import app from '../Firebase/Firebase.config';


export const AuthContext = createContext();
const auth = getAuth(app)


const UseContext = ({ children }) => {
    const authValue={}
    return (
        <div>
            <AuthContext.Provider value={authValue}>
            {children} 
            </AuthContext.Provider>
        </div>
    );
};

export default UseContext;