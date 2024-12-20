
import Header from "@/components/general/headerAdmin";
import checkAuth from "@/helpers/checkAuth";
import { redirect } from "next/navigation";
import { toast } from "react-toastify";

export default async function AdminLayout({children } : {children: React.ReactNode}) {
  
    // const router = useRouter()
    // check if user is registerd and is admin then can access this route otherwise must be redirec to home (or auth login) route and toastify
    

    const isAuthenticated = await checkAuth()

    console.log('is' ,isAuthenticated)
  
    if(! isAuthenticated){

        // toast('for access this route you should first login')

        redirect('/auth/login')
    }
  
  
    return (
        <main className="w-full flex flex-col" >
            <Header />
            {children}
        </main>
    );

}