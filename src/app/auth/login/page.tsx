'use client'
import LoginForm from "@/forms/auth/loginForm";
import { updateUserInfo } from "@/store/auth";
import { useAppDispatch } from "@/store/hooks";
import { UserModel } from "@/types/models";
import Link from "next/link";
import { useRouter } from "next/navigation";
import LoadingPreRender from "@/components/general/loadings/loadingPrerender";
import { Suspense } from "react";


export default function Login() {
    
    const router = useRouter()
    const dispatch = useAppDispatch()

    const storeUserInfo = (user : UserModel) => {
        dispatch(updateUserInfo(user))
    }


    return (
        <Suspense fallback={<LoadingPreRender /> }>

        <div className="flex min-h-full  w-[500px] flex-col items-center justify-center px-6 py-12 lg:px-8 rounded-lg  border border-slate-200 shadow-md ">

            <div className=" sm:w-full  ">

                <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
                    Login
                </h2>
            </div>

            <div className="mt-10 sm:w-full   ">

                <LoginForm router={router} storeUser={storeUserInfo} />
  
                <p className="mt-10 text-center text-sm/6 text-gray-500">
                    Dose not have an account?{' '}
                    <Link href="/auth/register" className="font-semibold text-indigo-600 hover:text-indigo-500">
                        Resgister
                    </Link>
                </p>
            </div>

        </div>

        </Suspense>

    )
}