'use client'

import { toast } from "react-toastify"


const LogoutButton = ({Cookies} : {Cookies : any}) => {


    const logOutHandler = (e : React.MouseEvent<HTMLButtonElement> ) => {
        // it dose not work because can not send handlers as props from ssr to csr and swr is not update for nextjs 15 already and i need async and await
  
        e.preventDefault()
        
        toast.info('to logout you should remove panel_tokne manualy in chrome devtools')
        
    }
   

    return (
        <button onClick={logOutHandler} className="flex items-center hover:bg-blue-600 w-full hover:text-white  gap-2 p-1 rounded-md hover:text-opacity-80 text-slate-800 " >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M22 10.5h-6m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM4 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 10.374 21c-2.331 0-4.512-.645-6.374-1.766Z" />
            </svg>
            Log out
        </button>
    )
}

export default LogoutButton;