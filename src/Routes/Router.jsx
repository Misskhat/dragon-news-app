import {createBrowserRouter} from "react-router";
import HomeLayouts from "../layouts/HomeLayouts";
import Home from "../pages/Home";
import CatagoriesNews from "../pages/CatagoriesNews";

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
        element: <h1>Auth router</h1>,
    },
    {
        path: "/news",
        element: <h1>News paper router</h1>,
    },
    {
        path: "/*",
        element: <h1>Error 404</h1>,
    },
]);

export default router;
