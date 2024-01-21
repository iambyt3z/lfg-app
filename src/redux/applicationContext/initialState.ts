import LfgPostData from "../../interfaces/LfgPostData";
import sampleLfgPostsData from "./sampleLfgPosts";

export interface ApplicationContext {
    pageSelected: number;
    posts: LfgPostData[];
    searchText: string;
    totalNumberOfPages: number;
    totalNumberOfPosts: number;
}

const initialApplicationContextState: ApplicationContext = {
    "pageSelected": 1,
    "posts": sampleLfgPostsData,
    "searchText": "",
    "totalNumberOfPages": 1,
    "totalNumberOfPosts": 9,
};

export default initialApplicationContextState;
