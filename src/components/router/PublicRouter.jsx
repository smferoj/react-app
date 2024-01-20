import React from 'react'
import { createBrowserRouter } from 'react-router-dom';
import AuthLayout from '../layout/AuthLayout';
import Login from '../modules/auth/Login';
import Public from '../modules/Public';
import ErrorPage from './../modules/ErrorPage';

 
const PublicRouter = createBrowserRouter([
    {
        path: '/',
        element: <AuthLayout/>,
        children: [
            {
                path: '/',
                element: <Login/>
            },
            {
                path: '/public',
                element: <Public/>
            }
        ]
    },
    {
        path: '*',
        element: <ErrorPage/>,
    }
])

export default PublicRouter








