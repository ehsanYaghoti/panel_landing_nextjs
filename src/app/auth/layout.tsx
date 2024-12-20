import LoadingPreRender from "@/components/general/loadings/loadingPrerender";
import checkAuth from "@/helpers/checkAuth";
import { redirect } from "next/navigation";
import { Suspense } from "react";


export default async function AuthLayout({children } : {children: React.ReactNode}) {
  
    // check user is authenticated if so then redirect to user panel (or home route) then be toastified.
  
    const isAuthenticated = await checkAuth()

    console.log('is' ,isAuthenticated)
  
    if(isAuthenticated){

        // toast('for access this route you should first login')

        redirect('/')
    }
  
    return (
        <Suspense fallback={<LoadingPreRender /> }>
            <main className="w-full h-full p-6 min-h-screen flex items-center justify-center" >
                {children}
            </main>
        </Suspense>
    );

}