import LfgPosts from "../pages/LfgPosts";
import Login from "../pages/Login";
import MyPosts from "../pages/MyPosts";
import PrivateRoute from "./PrivateRoute";
import Signup from "../pages/Signup";
import User from "../pages/User";
import { useRoutes } from "react-router-dom";

export default function Router() {
    let routes = useRoutes([
        {
            "element": 
                <PrivateRoute>
                    <LfgPosts/>
                </PrivateRoute>,
            "path": "/",
        },
        {
            "element": 
                <PrivateRoute>
                    <MyPosts/>
                </PrivateRoute>,
            "path": "/my-posts",
        },
        {
            "element": <Login/>,
            "path": "/login",
        },
        {
            "element": <Signup/>,
            "path": "/signup",
        },
        {
            "element": 
                <PrivateRoute>
                    <User/>
                </PrivateRoute>,
            "path": "/profile",
        }
    ]);

    return routes;
};
