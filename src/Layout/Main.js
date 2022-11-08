import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbars from '../Pages/Navbars/Navbars';

const Main = () => {
    return (
        <div>
            <Navbars />
            <Outlet/>
        </div>
    );
};

export default Main;