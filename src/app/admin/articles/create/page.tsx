'use client'
import LoadingPreRender from "@/components/general/loadings/loadingPrerender";
import ArticleForm from "@/forms/admin/articles/articleFormCreate";
import { useRouter } from "next/navigation";
import { Suspense } from "react";


const CreateArticle = () => {
    
    const router = useRouter()

    return (
        <Suspense fallback={<LoadingPreRender /> }>

        <div className="flex min-h-full  w-[900px] flex-col items-center justify-center px-6 py-12 lg:px-8 rounded-lg  border border-slate-200 shadow-md ">

            <div className=" sm:w-full  ">

                <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
                    Create Article
                </h2>
            </div>

            <div className="mt-10 sm:w-full   ">

                <ArticleForm router={router} editMode={false} />
  
            </div>

        </div>
        </Suspense>
    )
}


export default CreateArticle