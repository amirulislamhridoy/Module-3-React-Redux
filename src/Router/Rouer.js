import {
    createBrowserRouter, Outlet,
} from "react-router-dom";
import Card from "../Component/Card/Card";
import Home from "../Component/Home/Home";
import Main from "../Component/Main/Main";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
            },
            {
                path: "/card",
                element: <Card></Card>,
            },
            {
                path: "second",
                element: <div>Second</div>,
            },
            {
                path: "/third",
                element: <div>
                    third 
                    <Outlet></Outlet>
                </div>,
                children: [
                    {
                        index: true,
                        element: <div>nested first</div>,
                    },
                    {
                        path: 'sss',
                        element: <Home></Home>,
                    },
                ],
            },
            {
                path: "*",
                element: <div>404</div>,
            },
        ]
    }
]);

export default router