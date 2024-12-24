'use client';

import Title from "../landing/header/title";
import Navbar from "../landing/header/navbar";
import HiddenHeader from "../landing/header/hiddenHeader";
import BurgurButton from "../landing/header/burgerButton";
import { useEffect, useState } from "react";
import callApi from "@/helpers/callApi";
import { useAppDispatch } from "@/store/hooks";
import { updateUserInfo } from "@/store/auth";
import AuthSection from "../landing/header/authSection";
import { toast } from "react-toastify";

const HeaderHome = () => {

    const [loadingUser , setLoadingUser] = useState(true)
    const dispatch = useAppDispatch()

    useEffect(() => {

        setLoadingUser(true)
        callApi().get('/user')
        .then((res) => {
            const data = res?.data
            if(data.success){
                if(data.user){
                    console.log(data?.user)
                    dispatch(updateUserInfo(data.user))
                } 

                // toast.error('the panel_token cookie is not authentic remove it')
                setLoadingUser(false)

            } 
        })
        .catch(err => {
            console.log(err)
            setLoadingUser(false)
        })


    } , [])

    
   
    
    return (
        <>
        
            <header className="flex items-center py-5 px-2 md:px-20 w-full justify-between border-b-2 border-b-slate-50 mb-3 font-[500]  bg-white" >
                
                {/* burger menu */}
                <BurgurButton />

                <Title />
                <Navbar />
                
                {/* authentication section */}
                <AuthSection loadingUserInfo={loadingUser} />


            </header>

            {/* hidden menu */}
            <HiddenHeader />
        
        </>
        
    )
}

export default HeaderHome;