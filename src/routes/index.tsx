import Login from "../pages/Login";
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
        }
    ]);

    return routes;
};
