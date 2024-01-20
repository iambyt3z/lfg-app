export interface Login {
    loginId: string;
    password: string;
}

const initialLoginState: Login = {
    "loginId": "",
    "password": "",
};

export default initialLoginState;
