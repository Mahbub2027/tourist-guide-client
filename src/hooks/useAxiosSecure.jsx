import axios from "axios";
import { useNavigate } from "react-router-dom";
import useAuth from "./useAuth";


const axiosSecure = axios.create({
    baseURL: 'http://localhost:5000'
})

const useAxiosSecure = () => {
    const navigate = useNavigate();
    const {logOutUser} = useAuth();

    // intercept for request
    axiosSecure.interceptors.request.use(function (config){
        const token = localStorage.getItem('access-token')
        // console.log('requested stopped by intercept', token)
        config.headers.authorization = `Bearer ${token}`
        return config;
    },function (error) {
        // Do something with request error
        return Promise.reject(error);
      })

    // intercept for 401 & 403 error
    axiosSecure.interceptors.response.use(function (response) {
        return response;
    },  async function(error){
        const status = error.response.status;

        // console.log('status error in the interceptor', status)
        if(status === 401 || status === 403) {
            await logOutUser();
            navigate('login')
        }
        return Promise.reject(error);
    })


    return axiosSecure;
};

export default useAxiosSecure;