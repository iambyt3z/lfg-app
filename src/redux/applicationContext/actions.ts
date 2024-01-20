import { ApplicationContext } from "./initialState";
import { setSearchText } from "./reducer";

import { useDispatch } from "react-redux";

function applicationContextActionsProvider() {
    const dispatch = useDispatch();

    return (
        {
            "setSearchText":
            (searchText: ApplicationContext["searchText"]) =>
                dispatch(setSearchText(searchText)),
        }
    );
};

export default applicationContextActionsProvider;
