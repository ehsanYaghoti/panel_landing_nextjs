'use client'
import LoadingPreRender from "@/components/general/loadings/loadingPrerender";
import ArticleFormEdit from "@/forms/admin/articles/articleFormEdit";
import { ArticleModel } from "@/types/models";
import { Circle, RotateRight } from "@mui/icons-material";
import { useRouter, useSearchParams } from "next/navigation";
import { Suspense, useEffect, useState } from "react";


const EditArticle = () => {
    
    const router = useRouter()
    const params = useSearchParams()
    
    const [article , setArticle] = useState<ArticleModel>({id: 0,
        title : '' , description : '' , summary : '' 
        ,language : '' , createdAt : '' , image : '' 
        , author : '' 
        , viewCount : 0 , likeCount: 0 
    })
    const [loading , setLoading] = useState(true)
    
    const id = params.get('id')


    useEffect(() => { 

        setLoading(true)
        fetch(`https://6759b1ae099e3090dbe29875.mockapi.io/api/articles/${id}`)
        .then(res => {
            return res.json()
        })
        .then(data => {
            setArticle(data)
            setLoading(false)

        })
        .catch(error => {
            console.log(error)
            setLoading(false)
        })

    } , [])


    return (
        <Suspense fallback={<LoadingPreRender /> }>

        <div className="flex min-h-full  w-[900px] flex-col items-center justify-center px-6 py-12 lg:px-8 rounded-lg  border border-slate-200 shadow-md ">

            <div className=" sm:w-full  ">

                <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
                    Edit Article
                </h2>
            </div>

            <div className="mt-10 sm:w-full   ">

                {
                    loading ? <RotateRight className=" animate-spin  self-center  m-auto w-8 h-8" />
                    : <ArticleFormEdit router={router} article={article} id={id as string} editMode={true}  />
                }
  
            </div>

        </div>

        </Suspense>
    )
}


export default EditArticle