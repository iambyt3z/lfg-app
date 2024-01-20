import { setLoginId, setPassword } from "./reducer";
import { Login } from "./initialState";

import { useDispatch } from "react-redux";

function loginActionsProvider() {
    const dispatch = useDispatch();

    return (
        {
            "setLoginId":
            (loginId: Login["loginId"]) =>
                dispatch(setLoginId(loginId)),

            "setPassword":
            (password: Login["password"]) =>
                dispatch(setPassword(password)),
        }
    );
};

export default loginActionsProvider;
