import { LoginFormValues } from "@/types/auth"
import { UserModel } from "@/types/models"
import callApi from "./callApi"

const getUserslist = async () => {
    try {
    
        const res  = await  callApi().get('/api/users' )

        const users = res?.data

        return users
        

  
    } catch (error) {
        console.log(error)
    }
}

const getUser = async (values : LoginFormValues) => {

    try {
            
        const users : UserModel[]  = await getUserslist()


        if(users){
            console.log('users' , users)

            const user = users.find(user => {
                return user.email === values.email 
            })


            console.log('uuser' , user)

            return user
        }


    } catch (error) {
        console.log(error)
    }

}


const isUserAlreadyExist = async (values : LoginFormValues ) => {
    try {

        
        const user = await getUser(values)

        console.log('user :' , user)

        if(user === undefined){
            return false
        } else if(user){
            return true
        }

    } catch (error) {
        console.log(error)
    }

}

const comparePassword = async (values : LoginFormValues , user: UserModel | undefined) => {

    try {
            
        const passwordField = values.password

        // if(! userArg){
        //     let user = await getUser(values)
        // }


        let isPasswordValidated = false
        if(user !== undefined){
            if( user.password === passwordField){
                isPasswordValidated = true
            }
        }
        return isPasswordValidated;

    
    } catch (error) {
        console.log(error)
    }

}

const updateUserAuthenticated = async (user : UserModel ) => {
    try {
        
    } catch (error) {   
        console.log(error)
    }
}

const getUserById = async (id : string) =>  {
    try {
        
        const res = await callApi().get(`/users/${id}`)

        const user = res?.data

        console.log('ucsrer' , user)
        return user;

    } catch (error) {
        console.log(error)
    }
} 

const getUserByToken = async (token : string) =>  {
    try {
        
        const users : UserModel[] = await getUserslist()

        const user = users.find(user => {
            console.log(typeof user.token)
            return `${user.token}` === token
        })

        return user;

    } catch (error) {
        console.log(error)
    }
} 


export {isUserAlreadyExist , comparePassword , getUser , getUserslist , getUserById , getUserByToken}
