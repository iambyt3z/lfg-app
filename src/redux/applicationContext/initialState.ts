import LfgPostData from "../../interfaces/LfgPostData";
import sampleLfgPostsData from "./sampleLfgPosts";

export interface ApplicationContext {
    openBackdrop: boolean;
    pageSelected: number;
    posts: LfgPostData[];
    refreshCounter: number;
    searchText: string;
    totalNumberOfPages: number;
    totalNumberOfPosts: number;
}

const initialApplicationContextState: ApplicationContext = {
    "openBackdrop": false,
    "pageSelected": 1,
    "posts": sampleLfgPostsData,
    "refreshCounter": 0,
    "searchText": "",
    "totalNumberOfPages": 1,
    "totalNumberOfPosts": 9,
};

export default initialApplicationContextState;
