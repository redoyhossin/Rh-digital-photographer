import React from 'react';
import { createContext } from 'react';

export const AuthContext = createContext();

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