import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import initialApplicationContextState, { ApplicationContext } from "./initialState";

const applicationContextSlice = createSlice({
    "initialState": initialApplicationContextState,
    "name": "applicationContext",
    "reducers": {
        "setPageSelected": (
            state: ApplicationContext,
            action: PayloadAction<ApplicationContext["pageSelected"]>
        ) => {
            state.pageSelected = action.payload;
        },

        "setPosts": (
            state: ApplicationContext,
            action: PayloadAction<ApplicationContext["posts"]>
        ) => {
            state.posts = action.payload;
        },

        "setSearchText": (
            state: ApplicationContext,
            action: PayloadAction<ApplicationContext["searchText"]>
        ) => {
            state.searchText = action.payload;
        },

        "setTotalNumberOfPages": (
            state: ApplicationContext,
            action: PayloadAction<ApplicationContext["totalNumberOfPages"]>
        ) => {
            state.totalNumberOfPages = action.payload;
        },
        
        "setTotalNumberOfPosts": (
            state: ApplicationContext,
            action: PayloadAction<ApplicationContext["totalNumberOfPosts"]>
        ) => {
            state.totalNumberOfPosts = action.payload;
        },
    }
});

export const {
    setPageSelected,
    setPosts,
    setSearchText,
    setTotalNumberOfPages,
    setTotalNumberOfPosts,
} = applicationContextSlice.actions;

export default applicationContextSlice.reducer;
