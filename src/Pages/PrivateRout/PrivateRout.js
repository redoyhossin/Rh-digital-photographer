import { Spinner } from 'flowbite-react';
import React from 'react';
import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../context/UseContext';

const PrivateRout = ({ children }) => {
    const { users, loding } = useContext(AuthContext)
    const location = useLocation()

    if (loding) {
        return <div className='text-center'>
            <Spinner
                aria-label="Extra large spinner example"
                size="xl"
            />
        </div>
    }
    if (users && users.uid) {
        return children
    }
    return <Navigate to='/Login' state={{ from: location }} replace>

    </Navigate>

};

export default PrivateRout;