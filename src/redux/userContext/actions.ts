import { 
    setAboutUser,
    setInterests,
    setName,
    setUserToken,
} from "./reducer";

import { UserContext } from "./initialState";
import { useDispatch } from "react-redux";

function applicationContextActionsProvider() {
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
        }
    );
};

export default applicationContextActionsProvider;
