import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HandleError from '../HandleError/HandleError';
import Main from '../Layout/Main';
import AddReview from '../Pages/AddReview/AddReview';
import Blog from '../Pages/Blog/Blog';
import Allservicehome from '../Pages/Home/Allservicehome/Allservicehome';
import Home from '../Pages/Home/Home';
import Singleservice from '../Pages/Home/Homeservice/Singleservice';
import Login from '../Pages/Login/Login';
import PrivateRout from '../Pages/PrivateRout/PrivateRout';
import Register from '../Pages/Register/Register';
import Addservice from '../Pages/servicespart/Addservice/Addservice';

const Router = () => {

    const router = createBrowserRouter([
        {
            path: '/',
            element: <Main />,
            children: [
                {
                    path: '/',
                    element: <Home />,
                    loader: () => fetch('http://localhost:5000/allserviceshome')
                },
                {
                    path: 'Allservicehome',
                    element: <Allservicehome />,
                    // loader: () => fetch('http://localhost:5000/allservices')
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
                },
                {
                    path: 'AddReview',
                    
                    element: <PrivateRout><AddReview /></PrivateRout>
                },
                {
                    path: '/Singleservice/:Id',
                    loader: ({ params }) => fetch(`http://localhost:5000/allservices/${params.Id}`),
                    element: <Singleservice />

                },
                {
                    path: 'Addservice',
                   element:<Addservice/> 
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