import {createBrowserRouter} from "react-router";
import HomeLayouts from "../layouts/HomeLayouts";
import Home from "../pages/Home";
import CatagoriesNews from "../pages/CatagoriesNews";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AuthLayout from "../layouts/AuthLayout";
import NewsDetails from "../pages/NewsDetails";

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayouts></HomeLayouts>,
        children: [
            {
                index: true,
                path: "/",
                element: <Home></Home>,
            },
            {
                path: "/catagories/:id",
                element: <CatagoriesNews></CatagoriesNews>,
                loader: () => fetch("/news.json"),
            },
        ],
    },
    {
        path: "/auth",
        element: <AuthLayout></AuthLayout>,
        children: [
            {
                index: true,
                path: "/auth/login",
                element: <Login></Login>,
            },
            {
                path: "/auth/register",
                element: <Register></Register>,
            },
        ],
    },
    {
        path: "/news-details/:id",
        element: <NewsDetails></NewsDetails>,
    },
    {
        path: "/*",
        element: <h1>Error 404</h1>,
    },
]);

export default router;
