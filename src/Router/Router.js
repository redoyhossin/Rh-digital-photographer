import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from '../Layout/Main';
import Blog from '../Pages/Blog/Blog';
import Home from '../Pages/Home/Home';
import Login from '../Pages/Login/Login';

const Router = () => {

    const router = createBrowserRouter([
        {
            path: '/',
            element: <Main />,
            children: [
                {
                    path: '/',
                    element:<Home/>
                },
                {
                    path: 'Blog',
                    element:<Blog/>
                },
                {
                    path: 'Login',
                    element:<Login/>
                }
            ]
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