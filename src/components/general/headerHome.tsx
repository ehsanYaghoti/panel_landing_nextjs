'use server';

import { getUserByToken } from "@/helpers/user";
import { cookies } from "next/headers";
import Title from "../landing/header/title";
import Navbar from "../landing/header/navbar";
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import Link from "next/link";
import HiddenHeader from "../landing/header/hiddenHeader";
import BurgurButton from "../landing/header/burgerButton";
import LogoutButton from "../landing/header/logoutButton";

const HeaderHome = async () => {

    
    const cookieStore =  await cookies()

    const usercookie =  cookieStore.get('panel_token')

    let user = undefined

    if(usercookie){
        user = await getUserByToken(usercookie.value)
    }

    const logOutHandler = (e : React.MouseEvent<HTMLButtonElement> ) => {
        // it dose not work because can not send handlers as props from ssr to csr and swr is not update for nextjs 15 and react 19 already
        e.preventDefault()

        cookieStore.delete('panel_token')
        user = undefined
    }

    
    return (
        <>
        
            <header className="flex items-center py-5 px-2 md:px-20 w-full justify-between border-b-2 border-b-slate-50 mb-3 font-[500]   z-40 bg-white" >
                
                {/* burger menu */}
                <BurgurButton />

                <Title />
                <Navbar />
                
                <div className="flex items-center gap-4 text-xl text-slate-700" >
                    {
                        user ?        
                        <Menu>
                        <MenuButton className={'flex items-center gap-1 cursor-pointer'} >
                            <i className="hidden md:flex" >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                </svg>
                            </i>
                            <span className="text-base md:text-lg text-slate-700" >
                                {user?.username} 
                            </span>
                        </MenuButton>
                        <MenuItems anchor="bottom" className={'bg-white shadow-lg border border-slate-300  font-[600] text-slate-900 p-2 mt-3 rounded-md flex flex-col items-start gap-4 '} >
                        <MenuItem>
                            <Link href={{pathname : `/user/panel/${user?.id}`}} className="text-base md:text-lg flex items-center data-[focus]:bg-blue-600 w-full hover:text-white gap-2 p-1 rounded-md hover:text-opacity-80 text-slate-800 " >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                                </svg>
                                User panel 
                            </Link>
                        </MenuItem>
                        <MenuItem>
                            <Link href={{pathname : `/admin/articles`}} className="text-sm md:text-lg flex items-center data-[focus]:bg-blue-600 w-full hover:text-white  gap-2 p-1 rounded-md hover:text-opacity-80 text-slate-800 " >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
                                </svg>
                                <span>Admin Panel</span>
                            </Link>
                        </MenuItem>
                        {/* <MenuItem>
                            <LogoutButton Cookies={null} />
                        </MenuItem> */}
                        </MenuItems>
                        </Menu>                 
                        
                        : <div className="flex items-center gap-3 mr-2 text-slate-700 fnot-[700]" >
                            <Link href={{pathname :'/auth/login'}} >Login</Link>
                            <Link href={{pathname : '/auth/register'}} >register</Link>
                        </div>
                    }
                    <div className="px-4 py-2 hidden xl:flex items-center gap-1 border border-violet-600 text-violet-600 hover:bg-opacity-50 hover:text-opacity-50 rounded-md text-lg font-[500]" >
                        <Link href={{pathname :'/getStarted'}} className="flex" >
                            Get Started
                        </Link>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-5">
                            <path fillRule="evenodd" d="M2 10a.75.75 0 0 1 .75-.75h12.59l-2.1-1.95a.75.75 0 1 1 1.02-1.1l3.5 3.25a.75.75 0 0 1 0 1.1l-3.5 3.25a.75.75 0 1 1-1.02-1.1l2.1-1.95H2.75A.75.75 0 0 1 2 10Z" clipRule="evenodd" />
                        </svg>
                    </div>
                </div>

            </header>

            {/* hidden menu */}
            <HiddenHeader />
        
        </>
        
    )
}

export default HeaderHome;