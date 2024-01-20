import React from 'react'
import { createBrowserRouter } from 'react-router-dom';

import ErrorPage from './../modules/ErrorPage';
import Master from './../layout/Master';
import Dashboard from './../modules/Dashboard';
import Test from './../modules/Test';


const ProjectRouter = createBrowserRouter([
    {
        path: '/',
        element: <Master/>,
        children: [
            {
                path: '/',
                element: <Dashboard/>
            },
            {
                path: '/test',
                element: <Test/>
            },
        ]
    }, 
    {
        path: '*',
        element: <ErrorPage/>,
    }
])


export default ProjectRouter


