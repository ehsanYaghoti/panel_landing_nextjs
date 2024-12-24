
import { getLoginToken } from "@/helpers/auth";

const useAuth = async () => {

    // check if a panel_token cookie exist and it belongs to a user in db 

    const token = await getLoginToken()

    if(token){
        return true
    }

    return false

}

export default useAuth;