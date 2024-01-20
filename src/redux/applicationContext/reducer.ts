import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import initialApplicationContextState, { ApplicationContext } from "./initialState";

const applicationContextSlice = createSlice({
    "initialState": initialApplicationContextState,
    "name": "applicationContext",
    "reducers": {
        "setSearchText": (
            state: ApplicationContext,
            action: PayloadAction<ApplicationContext["searchText"]>
        ) => {
            state.searchText = action.payload;
        },
    }
});

export const {
    setSearchText,
} = applicationContextSlice.actions;

export default applicationContextSlice.reducer;
