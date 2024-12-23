'use client';

import checkAuth from "@/helpers/checkAuth";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";


export default function AuthLayout({children } : {children: React.ReactNode}) {
  
    // check user is authenticated if so then redirect to user panel (or home route) then be toastified.
  
    const [loading , setLoading] = useState(true)
    const router = useRouter()

    useEffect(() => {
        setLoading(true)

        checkAuth()
        .then(isAuthenticated => {
            console.log('is',isAuthenticated)

            if(isAuthenticated){
                toast.info('to access this route you should logout first')
                router.push('/')
                setLoading(false)
                return
            }
            
            setLoading(false)

        })
        .catch(err => console.log(err))
    } , [])

  
    return (
            <main className="w-full h-full p-6 min-h-screen flex items-center justify-center" >
                {loading ? <span>laoding...</span> : children}
            </main>
    );

}