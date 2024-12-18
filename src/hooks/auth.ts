
import { getLoginToken } from "@/helpers/auth";

// import callApi from "@/helpers/callApi";
// import useSWR from "swr";

const useAuth = async () => {

    // check if a panel_token cookie exist and it belongs to a user in db 

    const token = await getLoginToken()

    console.log('use token' , token )
    if(token){
        return true
    }

    return false

    //     return callApi().get('/user-check' , {
    //         withCredentials : true,
    //     })



    // console.log(data , error , isLoading)

    // return {user : null , error , isLoading}


}

export default useAuth;