import { LoginFormValues } from "@/types/auth"
import { UserModel } from "@/types/models"

const getUserslist = async () => {
    try {
    
        const res = await fetch('https://6759b1ae099e3090dbe29875.mockapi.io/api/users' )

        const users = await res.json()

        return users
        

  
    } catch (error) {
        console.log(error)
    }
}

const getUser = async (values : LoginFormValues) => {

    try {
            
        const users : UserModel[]  = await getUserslist()


        if(users){

            const user = users.find(user => {
                return user.email === values.email 
            })

            return user
        }


    } catch (error) {
        console.log(error)
    }

}


const isUserAlreadyExist = async (values : LoginFormValues ) => {
    try {

        
        const user = await getUser(values)

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

const getUserById = async (id : string) =>  {
    try {
        
        const res = await fetch(`https://6759b1ae099e3090dbe29875.mockapi.io/api/users/${id}`)

        const user = await res.json()

        return user;

    } catch (error) {
        console.log(error)
    }
} 

const getUserByToken = async (token : string) =>  {
    try {
        
        const users : UserModel[] = await getUserslist()

        const user = users.find(user => {
            return `${user.token}` === token
        })

        return user;

    } catch (error) {
        console.log(error)
    }
} 


export {isUserAlreadyExist , comparePassword , getUser , getUserslist , getUserById , getUserByToken}