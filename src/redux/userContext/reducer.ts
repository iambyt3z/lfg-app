import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import initialUserContextState, { UserContext } from "./initialState";

const userContextSlice = createSlice({
    "initialState": initialUserContextState,
    "name": "userContext",
    "reducers": {
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
    }
});

export const {
    setAboutUser,
    setInterests,
    setName,
    setUserToken
} = userContextSlice.actions;

export default userContextSlice.reducer;
