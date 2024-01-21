import { 
    setAboutUser,
    setInterests,
    setName,
    setUserToken,
    setUsername,
} from "./reducer";

import { UserContext } from "./initialState";
import { useDispatch } from "react-redux";

function userContextActionsProvider() {
    const dispatch = useDispatch();

    return (
        {
            "setAboutUser":
            (aboutUser: UserContext["aboutUser"]) =>
                dispatch(setAboutUser(aboutUser)),

            "setInterests":
            (interests: UserContext["interests"]) =>
                dispatch(setInterests(interests)),

            "setName":
            (name: UserContext["name"]) =>
                dispatch(setName(name)),

            "setUserToken":
            (userToken: UserContext["userToken"]) =>
                dispatch(setUserToken(userToken)),

            "setUsername":
            (username: UserContext["username"]) =>
                dispatch(setUsername(username)),
        }
    );
};

export default userContextActionsProvider;
