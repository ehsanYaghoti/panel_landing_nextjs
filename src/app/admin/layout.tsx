
import Header from "@/components/general/headerAdmin";
import checkAuth from "@/helpers/checkAuth";
import { redirect } from "next/navigation";

export default async function AdminLayout({children } : {children: React.ReactNode}) {

    const isAuthenticated = await checkAuth()
  
    if(! isAuthenticated){
        redirect('/auth/login')
    }
  
  
    return (
        <main className="w-full flex flex-col" >
            <Header />
            {children}
        </main>
    );

}