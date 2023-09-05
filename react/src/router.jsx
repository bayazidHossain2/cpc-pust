import { Navigate, createBrowserRouter } from "react-router-dom";
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
import Advisor from "./views/admin/user/advisor";
import Team from "./views/admin/user/team";
import Member from "./views/admin/user/member";
import Request from "./views/admin/user/request";
import MailVarify from "./views/user/auth/mailVarify";
import NotifyViaMail from "./views/admin/mail/notifyViaMail";
import AllMails from "./views/admin/mail/allMail";
import ResendMail from "./views/admin/mail/resend";
import AddCatagory from "./views/admin/blogs/addCatagory";
import AllBlogs from "./views/admin/blogs/allBlogs";
import BlogRequests from "./views/admin/blogs/blogRequest";
import UserPageLayout from "./components/UserPageLayout";
import HomeU from "./views/public/Home";
import Gallery from "./views/public/Gallery";
import BlogsU from "./views/public/Blogs";
import EventsU from "./views/public/Events";
import MembersU from "./views/public/Members";


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
                path: '/advisor',
                element: <Advisor />
            },
            {
                path: '/team',
                element: <Team />
            },
            {
                path: '/member',
                element: <Member />
            },
            {
                path: '/userrequest',
                element: <Request />
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
                path: '/allBlogs',
                element: <AllBlogs />
            },
            {
                path: '/blogRequests',
                element: <BlogRequests />
            },
            {
                path: '/notify',
                element: <Notify />
            },
            {
                path: 'notify-via-mail',
                element: <NotifyViaMail />
            },
            {
                path: 'previousMail',
                element: <AllMails />
            },
            {
                path: 'resendMail',
                element: <ResendMail />
            },
            {
                path: 'addNewCatagory',
                element: <AddCatagory />
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

            {
                path: '/mail-varify',
                element: <MailVarify />
            },
        ]

    },
    {
        path: '/',
        element: <UserPageLayout />,
        children: [
            {
                path: '/home',
                element: <HomeU />
            },
            
            {
                path: '/gallery',
                element: <Gallery />
            },

            {
                path: '/blogsu',
                element: <BlogsU />
            },
            {
                path: '/eventsu',
                element: <EventsU />
            },
            {
                path: '/members',
                element: <MembersU />
            },

        ]

    },


    {
        path: '*',
        element: <NotFound />
    }
])

export default router;