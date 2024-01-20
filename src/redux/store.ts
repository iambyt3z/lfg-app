import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { Login } from "./login/initialState";
import loginReducer from "./login/reducer";

export interface RootState {
    "loginState": Login;
}

const rootReducer = combineReducers({
    "loginState": loginReducer
});

const store = configureStore({
    "reducer": rootReducer,
});

export default store;
