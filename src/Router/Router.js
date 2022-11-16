import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HandleError from '../HandleError/HandleError';
import Main from '../Layout/Main';
import AddReview from '../Pages/AddReview/AddReview';
import UpdateUser from '../Pages/AddReview/addreviewtable/UpdateUser/UpdateUser';
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
                    loader: () => fetch('https://server-five-vert.vercel.app/allserviceshome')
                },
                {
                    path: 'Allservicehome',
                    element: <PrivateRout><Allservicehome /></PrivateRout>,
                    loader: () => fetch('https://server-five-vert.vercel.app/allservices')
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

                    element: <PrivateRout> <AddReview /></PrivateRout>
                },
                {
                    path: '/Singleservice/:Id',
                    loader: ({ params }) => fetch(`https://server-five-vert.vercel.app/allservices/${params.Id}`),
                    element: <PrivateRout><Singleservice /></PrivateRout>

                },
                {
                    path: 'Addservice',
                    element: <Addservice />
                },
                {
                    path: '/UpdateUser/:UpdateUserID',
                    element: <UpdateUser />,
                    loader: ({ params }) => fetch(`https://server-five-vert.vercel.app/reviews/${params.UpdateUserID}`),
                }

            ]
        },
        {
            path: '*',
            element: <HandleError />
        }

    ])

    return (
        <div >
            <RouterProvider router={router}>

            </RouterProvider>
        </div>
    );
};

export default Router;