'use client';

import Link from "next/link";
import Navbar from "./navbar";
import Title from "./title";

const HiddenHeader = () => {

    let closeHiddenMenuHandler = () => {

        const hiddenMenu = document.getElementById("hiddenMenu"),
        overlay = document.getElementById("overlay");

        hiddenMenu?.classList.replace('flex' , 'hidden')
        overlay?.classList.replace('flex' , 'hidden')
    }
    

    return(
        <>
            <div id='hiddenMenu' dir='ltr' className='hidden flex-col items-start justify-start  gap-10 h-screen w-[320px] bg-zinc-100 dark:bg-[#092635] text-gray-700 dark:text-gray-50 bg-opacity-100 fixed left-0 top-0 z-50 px-6 py-4 ' >
                {/* hidden button */}
                <button id='closeButton' onClick={closeHiddenMenuHandler}  className='w-fit h-fit' >
                    <i className='text-blue-900 dark:text-gray-50 text-xl font-[700] cursor-pointer absolute top-5 right-5' >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                        </svg>
                    </i>
                </button>
                {/* Logo */}
                <Title />

                {/* Navigation Menu */}
                <nav className="flex flex-col items-start gap-8 text-slate-50 text-xl " >
                    <div className="flex items-center hover:text-slate-400 " >
                        <Link href='/#products' className="hover:text-slate-400 " >Product</Link>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-5 cursor-pointer">
                            <path fillRule="evenodd" d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                        </svg>
                    </div>
                    <div className="flex items-center hover:text-slate-400 " >
                        <Link href='/#practicing' >Practicing types</Link>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-5 cursor-pointer">
                            <path fillRule="evenodd" d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                        </svg>
                    </div>
                    <Link href='/#pricing' className="hover:text-slate-400 focus:scroll-auto " >Pricing</Link>

                </nav>
                
                
            </div>
            <div id='overlay' onClick={closeHiddenMenuHandler}  className='hidden w-screen h-screen fixed bg-gray-900 bg-opacity-50 z-40  ' ></div>
            
        </>
        
    )
}

export default HiddenHeader;