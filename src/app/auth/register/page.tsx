'use client'
import RegisterForm from "@/forms/auth/registerForm";
import Link from "next/link";
import { useRouter } from "next/navigation";


export default function Register() {


    const router = useRouter()

    return (
        <div className="flex min-h-full  w-[500px] flex-col items-center justify-center px-6 py-12 lg:px-8 rounded-lg  border border-slate-200 shadow-md ">

            <div className=" sm:w-full  ">

                <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
                    Register
                </h2>
            </div>

            <div className="mt-10 sm:w-full   ">

                <RegisterForm router={router} />
  
                <p className="mt-10 text-center text-sm/6 text-gray-500">
                    have an account?{' '}
                    <Link href="/auth/login" className="font-semibold text-indigo-600 hover:text-indigo-500">
                        Login
                    </Link>
                </p>
            </div>

        </div>
    )
}