import {
    increamentRefreshCounter,
    setOpenBackdrop,
    setPageSelected,
    setPosts,
    setSearchText,
    setTotalNumberOfPages,
    setTotalNumberOfPosts,
} from "./reducer";
import { ApplicationContext } from "./initialState";

import { useDispatch } from "react-redux";

function applicationContextActionsProvider() {
    const dispatch = useDispatch();

    return (
        {
            "increamentRefreshCounter": () =>
                dispatch(increamentRefreshCounter()),

            "setOpenBackdrop":
            (openBackdrop: ApplicationContext["openBackdrop"]) =>
                dispatch(setOpenBackdrop(openBackdrop)),

            "setPageSelected":
            (pageSelected: ApplicationContext["pageSelected"]) =>
                dispatch(setPageSelected(pageSelected)),

            "setPosts":
            (posts: ApplicationContext["posts"]) =>
                dispatch(setPosts(posts)),

            "setSearchText":
            (searchText: ApplicationContext["searchText"]) =>
                dispatch(setSearchText(searchText)),

            "setTotalNumberOfPages":
            (totalNumberOfPages: ApplicationContext["totalNumberOfPages"]) =>
                dispatch(setTotalNumberOfPages(totalNumberOfPages)),

            "setTotalNumberOfPosts":
            (totalNumberOfPosts: ApplicationContext["totalNumberOfPosts"]) =>
                dispatch(setTotalNumberOfPosts(totalNumberOfPosts)),
        }
    );
};

export default applicationContextActionsProvider;
