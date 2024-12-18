'use client';

import EnhancedTable from "@/components/general/admin/table";
import { ArticleModel } from "@/types/models";
import { CircularProgress } from "@mui/material";
import Link from "next/link";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";


interface Data {
    id : number;
    ID: string;
    title : string;
    description : string;
    image : string;
    author : string;
    createdAt : string;
  }

const Articles = () => {

    const [articlesLocalStorage, setArticlesLocalStorage] = useState<{ title: '', description: "", author: "" }[]>([])
    const [loading, setLoading] = useState(true)
    const [artcilesServer , setArticlesServer] = useState<ArticleModel[]>([])
    const [seacrhArtciles , setSearchArticles] = useState<ArticleModel[]>([])
    const [searchValue , setSearchValue] = useState('')


    useEffect(() => {
        setLoading(true)

        fetch('https://6759b1ae099e3090dbe29875.mockapi.io/api/articles')
        .then(res => { 
            return res.json() 
        })
        .then(data => { 
            console.log(data)
            setArticlesServer(data)
            setLoading(false)

        })
        .catch(err => console.log(err))

        const articles = localStorage.getItem('articles')
        if (articles) {
            setArticlesLocalStorage(JSON.parse(articles))
        }


    }, [])

    const searchHandler = (e : React.ChangeEvent<HTMLInputElement>) => {

        // e.preventDefault();

        const value = e.target.value
        setSearchValue(value)

        setLoading(true)

        const regexValue = new RegExp(value , 'gi')

        const foundArticles = artcilesServer.filter(article => {
            // return article.title.match(regexValue)
            return RegExp(value , 'gi').test(article.title)
        })

        console.log('search',foundArticles)

        setSearchArticles(prev => {
            return [
                ...foundArticles
            ]   
        })

        setLoading(false)

    }

    const deleteHandler = async (e : React.MouseEvent<HTMLButtonElement> , id : string) => {

        e.preventDefault()
        setLoading(true)
        

        const res = await fetch(`https://6759b1ae099e3090dbe29875.mockapi.io/api/articles/${id}` , {
            method : "DELETE",
        })

        const deletedArticle = await res.json()
        console.log(deletedArticle)


        if(res.ok){
            toast.success('article deleted success fully')
            setArticlesServer(prevState => {
                return [
                    ...prevState.filter(item => `${item.id}` !== id)
                ]
            })
            setSearchArticles(prev => {
                return [
                    ...prev.filter(item => `${item.id}` !== id)
                ]   
            })

        }

        setLoading(false)

    }

    return (
        <div className="w-[80%] min-h-screen h-fit flex flex-col gap-8 items-center  font-sans " >

            <h1 className="flex text-3xl text-slate-600  font-semibold  text-left mb-6" >Articles</h1>

            <div className="flex items-start justify-between  w-full" >
                <Link href={{ pathname : '/admin/articles/create'}} className="flex items-center gap-4 py-3 px-6  border rounded-md bg-green-400 text-white text-xl" >
                    create new article +
                </Link>
                

                <input type="text" onChange={searchHandler} className="p-4 border rounded-md text-lg shadow-md outline-blue-300 text-slate-600" placeholder="search article here..." />
            </div>

            {
                loading ? <span>loading...</span>
                : artcilesServer.length === 0 ? <span className="border border-blue-500 p-6 rounded-md text-xl font-semibold" >there is no article to show </span>  
                :  searchValue.length > 0 ? 
                seacrhArtciles.length > 0 ? <EnhancedTable articles={ seacrhArtciles} deleteHandler={deleteHandler} /> : <span>there is no rchresult sea</span>
                : <EnhancedTable articles={artcilesServer} deleteHandler={deleteHandler} /> 
            }
            
        </div>
    )
}


export default Articles;

