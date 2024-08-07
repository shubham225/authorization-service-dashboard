import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import { Root } from './Root'
import { Login } from './Login/Login'

export const Router = createBrowserRouter(
    [
        {
            path: "/",
            element: <Root />,
            children: [
                {
                    path: "/",
                    element: <Login />,
                    index: true
                },
                {
                    path: "/login",
                    element: <Login />
                }
            ]
        }
    ]
)
