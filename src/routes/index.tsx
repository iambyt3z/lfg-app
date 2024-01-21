import LfgPosts from "../pages/LfgPosts";
import Login from "../pages/Login";
import MyPosts from "../pages/MyPosts";
import Signup from "../pages/Signup";
import User from "../pages/User";
import { useRoutes } from "react-router-dom";

export default function Router() {
    let routes = useRoutes([
        {
            "element": <LfgPosts/>,
            "path": "/",
        },
        {
            "element": <MyPosts/>,
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
            "element": <User/>,
            "path": "/profile",
        }
    ]);

    return routes;
};
