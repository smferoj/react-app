import React from 'react'
import { createBrowserRouter } from 'react-router-dom';

import ErrorPage from './../modules/ErrorPage';
import Master from './../layout/Master';
import Dashboard from './../modules/Dashboard';
import AddCategory from '../modules/category/AddCategory';



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
                path: '/category/create',
                element: <AddCategory/>
            },
        ]
    }, 
    {
        path: '*',
        element: <ErrorPage/>,
    }
])


export default ProjectRouter


