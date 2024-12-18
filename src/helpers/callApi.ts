import ValidationError from "@/exceptions/validationError";
import axios, { AxiosInstance, AxiosRequestConfig } from "axios";

const callApi = () => {

    let axiosInstance : AxiosInstance = axios.create({
        baseURL : 'https://6759b1ae099e3090dbe29875.mockapi.io/api',
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
            // console.log(err)
            if(res){
                if(res.status === 422){
                    const errors = err?.response?.data?.fullMessageswithKey?.errors
                    throw new ValidationError(errors)
                }
            }
            
            throw err
            // Promise.reject(err)
        }

    )

    return axiosInstance;

}

export default callApi;