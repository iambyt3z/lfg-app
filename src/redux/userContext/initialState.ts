export interface UserContext {
    aboutUser: string;
    interests: string[];
    name: string;
    username: string;
    userToken: string;
}

const initialUserContextState: UserContext = {
    "aboutUser": "",
    "interests": [],
    "name": "",
    "userToken": "",
    "username": "",
};

export default initialUserContextState;
