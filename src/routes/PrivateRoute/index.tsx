import React, { ReactNode } from "react";
import { Navigate } from "react-router";
import { RootState } from "../../redux/store";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

interface PrivateRouteProps {
    children: ReactNode;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }) => {
    const userContextState = useSelector(
        (state: RootState) => 
            state.
                userContextState
    ); 

    const location = useLocation();
    const { userToken, username } = userContextState;

    if (
        userToken == "" ||
        username == ""
    ) {
        return (
            <Navigate to="/login" state={{ "from": location }}/>
        );
    }

    return (
        <>
            {children}
        </>
    );
};

export default PrivateRoute;
