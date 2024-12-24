'use client';

import callApi from "@/helpers/callApi";
import checkAuth from "@/helpers/checkAuth";
import { CircularProgress } from "@mui/material";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";


export default function AuthLayout({children } : {children: React.ReactNode}) {
  
    // check user is authenticated if so then redirect to user panel (or home route) then be toastified.
  
    const [loading , setLoading] = useState(true)
    const router = useRouter()

    useEffect(() => {

        setLoading(true)
        callApi().get('/user')
        .then((res) => {

            const data = res?.data

            // check if panel_token exist
            if(data.success && data.token){
                
                // check if panel_token is authentic
                if(data.user){
                    console.log(data?.user)
                    toast.info('you are login now please logout first')
                    router.push('/')
                    return 
                } 

                toast.error('the panel_token cookie exist but it is not authentic remove it from browser cookies')
                router.push('/')
                return
            } 

            setLoading(false)

        })
        .catch(err => {
            console.log(err)
            setLoading(false)
        })


    } , [])

  
    return (
            <main className="w-full h-full p-6 min-h-screen flex items-center justify-center" >
                {loading ? <CircularProgress /> : children}
            </main>
    );

}