import { createBrowserRouter, Navigate } from "react-router-dom";
import Login from "./views/login.jsx";
import Signup from "./views/Signup.jsx";
import User from "./views/User.jsx";
import NotFound from "./views/NotFound.jsx";
import Defaultlayout from "./components/Defaultlayout.jsx";
import GuestLayout from "./components/GuestLayout.jsx";
import Dashboard from "./views/Dashboard.jsx";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Defaultlayout />,
        children: [
            {
                path: "/",
                element: <Navigate to="/user" />
            },
            {
                path: "/dashboard", 
                element: <Dashboard />
            },
            {
                path: "/user",
                element: <User />
            }
        ]
    },
    {
        path: "/login",
        element: <GuestLayout />,
        children: [
            {
                index: true,
                element: <Login />
            }
        ]
    },
    {
        path: "/signup",
        element: <GuestLayout />,
        children: [
            {
                index: true,
                element: <Signup />
            }
        ]
    },
    {
        path: "*",
        element: <NotFound />
    }
]);
export default router