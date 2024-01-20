import { combineReducers, configureStore } from "@reduxjs/toolkit";

import { ApplicationContext } from "./applicationContext/initialState";
import { Login } from "./login/initialState";
import { UserContext } from "./userContext/initialState";
import applicationContext from "./applicationContext/reducer";
import loginReducer from "./login/reducer";
import userContextReducer from "./userContext/reducer";

export interface RootState {
    "applicationContextState": ApplicationContext;
    "loginState": Login;
    "userContextState": UserContext;
}

const rootReducer = combineReducers({
    "applicationContextState": applicationContext,
    "loginState": loginReducer,
    "userContextState": userContextReducer,
});

const store = configureStore({
    "reducer": rootReducer,
});

export default store;
