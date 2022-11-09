import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Footer/Footer';
import Navbars from '../Pages/Navbars/Navbars';

const Main = () => {
    return (
        <div>
            <Navbars />
            <Outlet />
            <Footer/>
        </div>
    );
};

export default Main;