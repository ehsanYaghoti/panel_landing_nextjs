import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime"
import { UserModel } from "./models"

export interface RegisterFormValues {
    username: string,
    email: string,
    phone_number : string,
    password: string
}

export interface RegisterFormProps {
    router : AppRouterInstance
}

export interface LoginFormValues {
    email: string,
    phone_number : string,
    password: string
}

export interface LoginFormProps {
    router : AppRouterInstance,
    storeUser : (user : UserModel) => void
}

export interface FormInputProps {
    name : string ,
    label ?: string ,
    type ?: string ,
    value ?: string ;
    inputclassName ?: string ,
    errorClassName ?: string ,
    labelClassName ?: string ,
    validShow ?: boolean 
}