import Link from "next/link";

const Navbar = () => {

    return(
        <nav className="hidden lg:flex items-center gap-8 text-slate-600 text-lg " >
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
    )
}

export default Navbar;