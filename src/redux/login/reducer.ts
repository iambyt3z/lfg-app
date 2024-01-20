import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import initialLoginState, { Login } from "./initialState";

const loginSlice = createSlice({
    "initialState": initialLoginState,
    "name": "login",
    "reducers": {
        "setLoginId": (
            state: Login,
            action: PayloadAction<Login["loginId"]>
        ) => {
            state.loginId = action.payload;
        },

        "setPassword": (
            state: Login,
            action: PayloadAction<Login["password"]>
        ) => {
            state.password = action.payload;
        },
    }
});

export const {
    setLoginId,
    setPassword,
} = loginSlice.actions;

export default loginSlice.reducer;
