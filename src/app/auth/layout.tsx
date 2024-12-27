'use client';

import callApi from "@/helpers/callApi";
import checkAuth from "@/helpers/checkAuth";
import { CircularProgress } from "@mui/material";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";


export default function AuthLayout({children } : {children: React.ReactNode}) {
  
    // check user is authenticated if so then redirect to user panel (or home route) then be toastified.
  
    

  
    return (
            <main className="w-full h-full p-6 min-h-screen flex items-center justify-center" >
                {children}
            </main>
    );

}