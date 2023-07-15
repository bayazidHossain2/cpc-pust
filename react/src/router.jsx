import {Navigate, createBrowserRouter} from "react-router-dom";
import Login from "./views/login";
import Signup from "./views/signup";
import User from "./views/user";
import NotFound from "./views/notFound";
import DefaultLayout from "./components/DefaultLayout";
import GuestLayout from "./components/GuestLayout";
import { Children } from "react";
import Dashboard from "./views/dashboard";


const router = createBrowserRouter([

    {
        path: '/',
        element: <DefaultLayout />,
        children: [
            {
                path: '/',
                element: <Navigate to="/users" />
            },

            {
                path: '/users',
                element: <User />
            },
            {
                path: '/dashboard',
                element: <Dashboard />
            },
        ]

    },
    {
        path: '/',
        element: <GuestLayout />,
        children: [
            {
                path: '/login',
                element: <Login />
            },
        
            {
                path: '/signup',
                element: <Signup />
            },
        ]

    },


    {
        path: '*',
        element: <NotFound />
    }
])

export default router;