import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HandleError from '../HandleError/HandleError';
import Main from '../Layout/Main';
import Blog from '../Pages/Blog/Blog';
import Home from '../Pages/Home/Home';
import Login from '../Pages/Login/Login';
import Register from '../Pages/Register/Register';

const Router = () => {

    const router = createBrowserRouter([
        {
            path: '/',
            element: <Main />,
            children: [
                {
                    path: '/',
                    element: <Home />,
                    loader:()=>fetch('http://localhost:5000/allserviceshome')
                },
                {
                    path: 'Blog',
                    element: <Blog />
                },
                {
                    path: 'Login',
                    element: <Login />
                },
                {
                    path: 'Register',
                    element: <Register />
                }
            ]
        },
        {
            path: '*',
            element: <HandleError />
        }

    ])

    return (
        <div>
            <RouterProvider router={router}>

            </RouterProvider>
        </div>
    );
};

export default Router;