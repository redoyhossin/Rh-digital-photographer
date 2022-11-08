import React from 'react';
import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../context/UseContext';

const PrivateRout = ({ children }) => {
    const { users, loding } = useContext(AuthContext)
    const location = useLocation()
    
    if (loding) {
        return <div>
            <h1>
            hello....

            </h1>
        </div>
    }
    if (users && users.uid) {
        return children
    }
    return <Navigate to='/Login' state={{from:location}} replace>

    </Navigate>
    
};

export default PrivateRout;