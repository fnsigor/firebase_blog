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
            {
                errorElement: <ErrorPage />,
                children: [
                    { index: true, element: <Home /> },
                    {
                        path: "https://firebase-blog-lake.vercel.app/about",
                        element: <About />,
                    },
                    {
                        path: "https://firebase-blog-lake.vercel.app/login",
                        element: <Login />,
                    },
                    {
                        path: "https://firebase-blog-lake.vercel.app/register",
                        element: <Register />,
                    },
                    {
                        path: "https://firebase-blog-lake.vercel.app/posts/create",
                        element: <CreatePost />,
                    },
                    {
                        path: "https://firebase-blog-lake.vercel.app/posts/:id",
                        element: <Post />,
                    },
                    {
                        path: "https://firebase-blog-lake.vercel.app/posts/edit/:id",
                        element: <EditPost />,
                    },
                    {
                        path: "https://firebase-blog-lake.vercel.app/dashboard",
                        element: <Dashboard />,
                    },
                    {
                        path: "https://firebase-blog-lake.vercel.app/search",
                        element: <Search />,
                    },
                ]
            },
            {
                errorElement: <ErrorPage />,
                children: [
                    { index: true, element: <Home /> },
                    {
                        path: "firebase-blog-lake.vercel.app/about",
                        element: <About />,
                    },
                    {
                        path: "firebase-blog-lake.vercel.app/login",
                        element: <Login />,
                    },
                    {
                        path: "firebase-blog-lake.vercel.app/register",
                        element: <Register />,
                    },
                    {
                        path: "firebase-blog-lake.vercel.app/posts/create",
                        element: <CreatePost />,
                    },
                    {
                        path: "firebase-blog-lake.vercel.app/posts/:id",
                        element: <Post />,
                    },
                    {
                        path: "firebase-blog-lake.vercel.app/posts/edit/:id",
                        element: <EditPost />,
                    },
                    {
                        path: "firebase-blog-lake.vercel.app/dashboard",
                        element: <Dashboard />,
                    },
                    {
                        path: "firebase-blog-lake.vercel.app/search",
                        element: <Search />,
                    },
                ]
            },
            
        ]
    },


]);