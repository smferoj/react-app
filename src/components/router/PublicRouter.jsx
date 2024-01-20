import React from 'react'
import { createBrowserRouter } from 'react-router-dom';
import AuthLayout from '../layout/AuthLayout';
import Login from '../modules/auth/Login';
import Public from '../modules/Public';

 
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
    }
])

export default PublicRouter








