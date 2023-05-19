//router
import {
    createBrowserRouter
} from "react-router-dom";


//pages
import About from "./pages/About";

import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import App from "./App";
import Login from "./pages/Login";
import Register from "./pages/register";
import ErrorPage from "./pages/ErrorPage";
import CreatePost from "./pages/CreatePost";
import Dashboard from "./pages/Dashboard";
import Search from "./pages/Search";
import Post from "./pages/Post";
import EditPost from "./pages/EditPost";
import GlobalErrorPage from "./GlobalErrorPage";



//============================================= ROUTER CONFIG ======================

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <GlobalErrorPage />,
        children: [
            {
                errorElement: <ErrorPage />,
                children: [
                    { index: true, element: <Home /> },
                    {
                        path: "/about",
                        element: <About />,
                    },
                    {
                        path: "/login",
                        element: <Login />,
                    },
                    {
                        path: "/register",
                        element: <Register />,
                    },
                    {
                        path: "/posts/create",
                        element: <CreatePost />,
                    },
                    {
                        path: "/posts/:id",
                        element: <Post />,
                    },
                    {
                        path: "/posts/edit/:id",
                        element: <EditPost />,
                    },
                    {
                        path: "/dashboard",
                        element: <Dashboard />,
                    },
                    {
                        path: "/search",
                        element: <Search />,
                    },
                ]
            },
        ]
    },


]);