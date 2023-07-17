import {Navigate, createBrowserRouter} from "react-router-dom";
import NotFound from "./views/notFound";
import DefaultLayout from "./components/DefaultLayout";
import GuestLayout from "./components/GuestLayout";
import User from "./views/admin/user";
import Dashboard from "./views/admin/dashboard";
import App from "./App";
import Login from "./views/user/auth/login";
import Signup from "./views/user/auth/signup";
import Events from "./views/admin/events";
import Blogs from "./views/admin/blogs";
import Notify from "./views/admin/notify";


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
            {
                path: '/events',
                element: <Events />
            },
            {
                path: '/blogs',
                element: <Blogs />
            },
            {
                path: '/notify',
                element: <Notify />
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