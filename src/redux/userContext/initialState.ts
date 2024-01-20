export interface UserContext {
    aboutUser: string;
    interests: string[];
    name: string;
    userToken: string;
}

const initialUserContextState: UserContext = {
    "aboutUser": "",
    "interests": [],
    "name": "",
    "userToken": "",
};

export default initialUserContextState;
