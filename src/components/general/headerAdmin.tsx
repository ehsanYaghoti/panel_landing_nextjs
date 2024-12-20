'use server';

import { getUserByToken } from "@/helpers/user";
import { AccountCircleOutlined } from "@mui/icons-material";
import { cookies } from "next/headers";
import Link from "next/link";
import { redirect } from "next/navigation";

const Header = async () => {
    
    const cookieStore =  await cookies()

    const usercookie =  cookieStore.get('panel_token')

    let user = undefined

    if(usercookie){
        user = await getUserByToken(usercookie.value)
    }


    console.log('user from server' ,user)

    return (
        <header className="flex items-center p-4 justify-between border-b-2 mb-3 " >
            <h1 className="text-2xl text-slate-700">
                <Link  href={{pathname : '/'}} >
                    Website Title
                </Link>
            </h1>
            {
                user ? 
                <span className="flex items-center gap-3 text-xl text-slate-700" > 
                    <AccountCircleOutlined />
                    {user?.username} 
                </span>
                : <div className="flex items-center gap-3" >
                    <Link href={{pathname :'/auth/login'}} >login</Link>
                    <Link href={{pathname : '/auth/register'}} >register</Link>

                </div>
            }
            
        </header>
    )
}

export default Header;