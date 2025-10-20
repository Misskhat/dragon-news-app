import {createBrowserRouter} from "react-router";
import HomeLayouts from "../layouts/HomeLayouts";

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayouts></HomeLayouts>,
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
