import { RootState } from "../../redux/store";
import axios from "axios";
import { useSelector } from "react-redux";

function useAuthorizedAxiosInstance() {
    const autoToken = useSelector(
        (state: RootState) => 
            state
                .userContextState
                .userToken
    );

    const authorizedAxiosInstance = () => {
        return axios.create({
            "baseURL": "http://127.0.0.1:5000",
            "headers": {
                "Authorization": `Bearer ${autoToken}`
            },
            "method": "post",
        });
    };

    return authorizedAxiosInstance;
} 

export default useAuthorizedAxiosInstance;
