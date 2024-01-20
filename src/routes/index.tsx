import Login from "../pages/Login";
import Signup from "../pages/Signup";
import User from "../pages/User";
import { useRoutes } from "react-router-dom";

export default function Router() {
    let routes = useRoutes([
        {
            "element": <>Hello World!</>,
            "path": "/",
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
            "path": "/user",
        }
    ]);

    return routes;
};
