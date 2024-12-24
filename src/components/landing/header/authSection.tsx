'use client';

import Link from "next/link";
import AuthMenu from './authMenu';
import { CircularProgress } from "@mui/material";

const AuthSection = ({loadingUserInfo} : {loadingUserInfo : boolean}) => {


    return (
        <div className="flex items-center gap-4 text-xl text-slate-700 z-[99] " >
            
            {loadingUserInfo ? <CircularProgress /> : <AuthMenu /> }
            <div className="px-4 py-2 hidden xl:flex items-center gap-1 border border-violet-600 text-violet-600 hover:bg-opacity-50 hover:text-opacity-50 rounded-md text-lg font-[500]" >
                <Link href={{ pathname: '/getStarted' }} className="flex" >
                    Get Started
                </Link>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-5">
                    <path fillRule="evenodd" d="M2 10a.75.75 0 0 1 .75-.75h12.59l-2.1-1.95a.75.75 0 1 1 1.02-1.1l3.5 3.25a.75.75 0 0 1 0 1.1l-3.5 3.25a.75.75 0 1 1-1.02-1.1l2.1-1.95H2.75A.75.75 0 0 1 2 10Z" clipRule="evenodd" />
                </svg>
            </div>
            
        </div>
    )
}

export default AuthSection;