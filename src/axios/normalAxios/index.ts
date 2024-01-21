import axios from "axios";

function useNormalAxiosInstance() {
    const normalAxiosInstance = () => {
        return axios.create({
            "baseURL": "http://127.0.0.1:5000",
            "method": "post",
        });
    };

    return normalAxiosInstance;
} 

export default useNormalAxiosInstance;
