import axios, { AxiosInstance, AxiosRequestConfig } from "axios";

const callApi = () => {

    let axiosInstance : AxiosInstance = axios.create({
        baseURL : 'http://localhost:3000/api',
        headers : {
            'Content-Type' : "application/json",
        },
        withCredentials : true
    })

    axiosInstance.interceptors.request.use(
        (config ) => {

            return config
        } ,
        (err) => {
            throw err
        }
    )

    axiosInstance.interceptors.response.use(
        (res) => {
            // manage api validation

            return res
        },
        (err) => {
            
            const res = err?.response
            console.log(err)
          
            
            throw err
            // Promise.reject(err)
        }

    )

    return axiosInstance;

}

export default callApi;