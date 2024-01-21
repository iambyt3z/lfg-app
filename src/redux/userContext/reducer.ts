import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import initialUserContextState, { UserContext } from "./initialState";

const userContextSlice = createSlice({
    "initialState": initialUserContextState,
    "name": "userContext",
    "reducers": {
        "clearState": () => {
            return initialUserContextState;
        },

        "setAboutUser": (
            state: UserContext,
            action: PayloadAction<UserContext["aboutUser"]>
        ) => {
            state.aboutUser = action.payload;
        },

        "setInterests": (
            state: UserContext,
            action: PayloadAction<UserContext["interests"]>
        ) => {
            state.interests = action.payload;
        },

        "setName": (
            state: UserContext,
            action: PayloadAction<UserContext["name"]>
        ) => {
            state.name = action.payload;
        },

        "setUserToken": (
            state: UserContext,
            action: PayloadAction<UserContext["userToken"]>
        ) => {
            state.userToken = action.payload;
        },

        "setUsername": (
            state: UserContext,
            action: PayloadAction<UserContext["username"]>
        ) => {
            state.username = action.payload;
        },
    }
});

export const {
    clearState,
    setAboutUser,
    setInterests,
    setName,
    setUserToken,
    setUsername
} = userContextSlice.actions;

export default userContextSlice.reducer;
