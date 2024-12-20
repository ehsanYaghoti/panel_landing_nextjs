'use client'

import { UserModel } from "@/types/models"
import axios from "axios"
import { useState } from "react"
import { toast } from "react-toastify"

interface Props {
    user ?: UserModel
}


const LogoutButton = ({user} : Props) => {

    const [logouted , setLogouted] = useState(false)

    const logOutHandler = (e : React.MouseEvent<HTMLButtonElement> ) => {
  
        e.preventDefault()
        
        axios.delete('http://localhost:3000/api/auth' , {withCredentials : true})
        .then(res => {
            console.log(res)
            user = undefined
            toast.success('logout was successfull')
            setLogouted(true)
            window.location.reload()

        })
        .catch(err => console.log(err))
        
    }
   

    return (
        
        !logouted ? <button onClick={logOutHandler} className="flex items-center hover:bg-blue-600 w-full hover:text-white  gap-2 p-1 rounded-md hover:text-opacity-80 text-slate-800 " >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M22 10.5h-6m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM4 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 10.374 21c-2.331 0-4.512-.645-6.374-1.766Z" />
        </svg>
            Log out
        </button> : ''

        
    )
}

export default LogoutButton;