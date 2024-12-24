import Link from "next/link";
import Image from "next/image";

const Title = () => {

    return(
        <h1 className="text-2xl text-violet-700 flex items-center gap-3 ">
            <Image src={'/PNG/Layer 1@2x.png'} alt="title of webiste" width={'30'} height={'30'} className=" w-auto h-auto" />
            <Link  href={{pathname : '/'}} className="flex items-center gap-2 font-[500]" >
                Sodci
            </Link>
        </h1>
    )
}

export default Title;